import React, { useState, SyntheticEvent, useEffect } from 'react'
import { isPast, isFuture } from 'date-fns'

import { EventCard } from './EventCard'
import Layout from '../../ui-kit/layouts'
import { Content, EventsActions, List } from './styled'
import { IconButton, RoundButton } from '../../ui-kit/components/Button'
import { Event, EventData, FILTER_VALUES } from '../../store/user/type'
import { NextPage } from 'next'
import { FILTER } from '../../enums/constants'
import { PageLoader } from '../../ui-kit/components/PageLoader'
import { Modal } from '../../ui-kit/components/Modal'
import { EventForm } from './EventForm'
import { PrivateRoute } from '../../routes'
import { Actions } from './Actions'

/** how you want to view events */
const VIEW_MODE = {
  LIST: 'list',
  CARDS: 'card',
}

interface EventsProps {
  events: Event[]
  eventLoading: boolean
  onSubmit: (eventData: EventData) => void
  onHandleJoin: (eventId: string) => void
  onHandleEdit?: (eventId: string) => void
  onHandleLeave: (eventId: string) => void
}

export const Events: NextPage<EventsProps> = ({
  events,
  eventLoading,
  onSubmit,
  onHandleJoin,
  onHandleLeave,
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [cardView, setCardView] = useState(VIEW_MODE.LIST)
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [filterBy, setFilterBy] = useState(FILTER.ALL)

  

  /**
   * Filter events by date using date-fns
   *
   * @param {Array} events
   * @param {String} filterBy
   */
  const filterEventsByDate = (__events: Event[], _filterBy: FILTER_VALUES) => {
    const newEvents = __events || []

    return newEvents.filter((event) => {
      const date = new Date(event.startsAt)

      if (filterBy === FILTER.PAST) {
        return isPast(date)
      } else if (_filterBy === FILTER.FUTURE) {
        return isFuture(date)
      } else {
        return event
      }
    })
  }
  /** Set filter on event list */
  useEffect(() => {
    const filteredEvent = filterEventsByDate(events, filterBy)
    setFilteredEvents(filteredEvent)
  }, [filterBy, events])
  /**
   * Handle change of filter for events
   *
   * @function
   * @param {object} event
   */
  const handleFilterChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLButtonElement
    setFilterBy(target.value)
  }
  const handleShowModal = () => {
    setShowCreateForm((_showCreateForm) => !_showCreateForm)
  }

  const handleToggle = (e: SyntheticEvent) => {
    const target = e.target as HTMLButtonElement
    setCardView(target.value)
  }

  const handleSubmit = (eventData: EventData) => {
    onSubmit(eventData)
    setShowCreateForm(false)
  }

  return (
    <PrivateRoute>
      {() => (
        <Layout>
          <Content>
            <EventsActions>
              <Actions onChange={handleFilterChange} filterBy={filterBy} />
              <div>
                <IconButton
                  iconUrl="/icons/grid-view.svg"
                  type="button"
                  onClick={handleToggle}
                  value={VIEW_MODE.CARDS}
                  isActive={cardView === VIEW_MODE.CARDS}
                />
                <IconButton
                  iconUrl="/icons/list-view.svg"
                  type="button"
                  onClick={handleToggle}
                  value={VIEW_MODE.LIST}
                  isActive={cardView === VIEW_MODE.LIST}
                />
              </div>
            </EventsActions>

            <List type={cardView}>
              {eventLoading ? (
                <PageLoader />
              ) : (
                filteredEvents.map((event) => (
                  <EventCard
                    onHandleLeave={(e) => onHandleLeave(e)}
                    onHandleJoin={(e) => onHandleJoin(e)}
                    type={cardView}
                    key={event.id}
                    data={event}
                  />
                ))
              )}
            </List>

            <RoundButton
              type="button"
              title="Create new event"
              icon="/icons/plus.svg"
              onClick={handleShowModal}
            />
            {showCreateForm && (
              <Modal onClose={handleShowModal}>
                <EventForm onSubmit={handleSubmit} />
              </Modal>
            )}
          </Content>
        </Layout>
      )}
    </PrivateRoute>
  )
}
