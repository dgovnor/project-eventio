import React, {
  useState,
  useEffect,
  FC,
  SyntheticEvent,
  useContext,
} from 'react'
import { Button } from '../../ui-kit/components/Button'
import { ListView, GridView, FlexContainer, ListItem, GridItem } from './styled'
import Link from 'next/link'
// import { ROUTES } from '../../enums/routes'
import { format } from 'date-fns'
import { Event } from '../../store/user/type'
import { COLOR, SIZES } from '../../enums/constants'
import { UserContext } from '../../store/user/UserContext'
// import { Image } from '../../ui-kit/components/Logo/styled'

const UserStatus = {
  Joined: 'JOIN',
  Left: 'LEAVE',
  Owner: 'EDIT',
}

interface Props {
  data: Event
  type: string
  onHandleJoin: (eventId: string) => void
  onHandleLeave: (eventId: string) => void
}

/**
 * Event card
 */
export const EventCard: FC<Props> = ({
  data,
  onHandleJoin,
  onHandleLeave,
  type,
}) => {
  const [eventStatus, setEventStatus] = useState(UserStatus.Joined)
  const [event, setEvent] = useState(data)
  const {
    state: { id },
  } = useContext(UserContext)

  const ButtonColors = () => {
    switch (eventStatus) {
      case UserStatus.Joined:
        return COLOR.PRIMARY
      case UserStatus.Left:
        return COLOR.SECONDARY
      case UserStatus.Owner:
        return COLOR.NORMAL
      default:
        break
    }
  }
  useEffect(() => {
    setEvent(data)
  }, [data])

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
    } else if (eventStatus === UserStatus.Left) {
      //want to leave event
      onHandleLeave(eventId)

      //update event status
      setEventStatus(UserStatus.Joined)
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
    <>
      {type === 'list' && (
        <Link href="#">
          <ListView>
            <ListItem className="title">{title}</ListItem>
            <ListItem className="description">{description}</ListItem>
            <ListItem className="createdBy">
              {firstName} {lastName}
            </ListItem>
            <ListItem className="date">
              {format(eventDate, 'MMM dd yyyy - h mm a')}
            </ListItem>
            <ListItem className="assignees">{`${attendees.length} of ${capacity}`}</ListItem>

            <Button
              disabled={disableButton || fullCapacity}
              size={SIZES.SMALL}
              color={ButtonColors()}
              type="button"
              onClick={eventAction}
            >
              {eventStatus}
            </Button>
          </ListView>
        </Link>
      )}
      {type === 'card' && (
        <Link href="#">
          <GridView>
            <GridItem className="date">
              {format(eventDate, 'MMM dd yyyy - h mm a')}
            </GridItem>
            <GridItem className="title">{title}</GridItem>
            <GridItem className="createdBy">
              {firstName} {lastName}
            </GridItem>
            <GridItem className="description">{description}</GridItem>
            <FlexContainer className="justify">
              <FlexContainer>
                <img src="/icons/icon-user.svg" alt='icon-user' />
              </FlexContainer>
                <GridItem className="assignees">{`${attendees.length} of ${capacity}`}</GridItem>

              <Button
                disabled={disableButton || fullCapacity}
                size={SIZES.SMALL}
                color={ButtonColors()}
                type="button"
                onClick={eventAction}
              >
                {eventStatus}
              </Button>
            </FlexContainer>
          </GridView>
        </Link>
      )}
    </>
  )
}

EventCard.displayName = 'EventCard'
