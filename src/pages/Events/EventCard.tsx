import React, {  useState, useEffect, FC, SyntheticEvent, useContext } from 'react'
import {Button} from '../../ui-kit/components/Button'
import { Card, Item } from './styled'
import Link from 'next/link'
import { ROUTES } from '../../enums/routes'
import { format } from 'date-fns'
import {Event} from '../../store/user/type'
import { COLOR, SIZES } from '../../enums/constants'
import { UserContext } from '../../store/user/UserContext'


const UserStatus = {
  Joined: 'JOIN',
  Left: 'LEAVE',
  Owner: 'EDIT',
}


interface Props {
  data: Event,
  type: string,
  isLoading: boolean,
  onHandleJoin: (eventId:string) => void,
  onHandleLeave: (eventId:string) => void
}

/**
 * Event card 
 */
export const EventCard: FC<Props> = ({ data, isLoading, onHandleJoin, onHandleLeave, type }) => {
  const [eventStatus, setEventStatus] = useState(UserStatus.Joined)
  const [event, setEvent] = useState(data)
  const {state:{id}} = useContext(UserContext)
 
  const ButtonColors = () => {
    switch (eventStatus) {
      case UserStatus.Joined:
        return COLOR.PRIMARY;
      case UserStatus.Left:
        return COLOR.SECONDARY;
      case UserStatus.Owner:
        return COLOR.NORMAL;
      default:
        break;
    }
  };

  const {
    id: eventId,
    title,
    description,
    startsAt,
    capacity,
    owner: { id: ownerId, firstName, lastName },
    attendees,
  } = event

  useEffect(() => {
    // logged in user created event
    if (id === ownerId) {
      setEventStatus(UserStatus.Owner)
    } else if (attendees.find((attendee) => attendee.id === id)) {
      //logged in user in an event
      setEventStatus(UserStatus.Left)
    } 
  }, [id, attendees, ownerId])

  /**
   * Click on action button on event card JOIN/LEAVE/EDIT
   * @function
   */
  const eventAction = async (e: SyntheticEvent) => {
    e.stopPropagation()
    setEvent(event)

    //want to join event
    if (eventStatus === UserStatus.Joined) {
      onHandleJoin(eventId)

      //update event status
      setEventStatus(UserStatus.Left)

      
        //update event data
        setEvent(event)
      
    } else if (eventStatus === UserStatus.Left) {
      //want to leave event
      onHandleLeave(eventId)

      //update event status
      setEventStatus(UserStatus.Joined)

      
        //update event data
        setEvent(event) 
    }
  }

  const eventDate = new Date(startsAt)
  const actualDate = new Date()

  /** Button is disabled if event is past and for join/leave event
   */
  const disableButton =
    actualDate > eventDate &&
    (eventStatus === UserStatus.Joined || eventStatus === UserStatus.Left)

  /** You cannot join full capacity event */
  const fullCapacity =
    eventStatus === UserStatus.Joined && attendees.length === capacity

  return (
    <Link href={`${ROUTES.EVENTS}/${eventId}`}>
      <Card type={type}>
        <Item className="title">{title}</Item>
        <Item className="description">{description}</Item>
        <Item className="createdBy">
          {firstName} {lastName}
        </Item>
        <Item className="date">{format(eventDate, "MMM dd yyyy - h mm a")}</Item>
        <Item className="assignees">{`${attendees.length} of ${capacity}`}</Item>

        <Button
          disabled={disableButton || fullCapacity}
          isLoading={isLoading}
          size={SIZES.SMALL}
          color={ButtonColors()}
          type="button"
          onClick={eventAction}
        >
          {eventStatus}
        </Button>
      </Card>
    </Link>
  )
}

EventCard.displayName = 'EventCard'
