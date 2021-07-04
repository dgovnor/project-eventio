/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react'
import {
  addNewEvent,
  getAllEvents,
  joinEvent,
  leaveEvent,
} from '../../apiFactory/eventApi'
import { PrivateRoute } from '../../routes/PrivateRoute'
import { Events } from './Events'
import { Event, EventData } from '../../store/user/type'

export const EventContainer = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [eventData, setEventData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const getEvents = await getAllEvents()

        setEvents(getEvents)
        setLoading(false)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [eventData])

  const handleSubmit = async (data: EventData) => {
    try {
      const submittedEvent = await addNewEvent({
        title: data.title,
        description: data.description,
        startsAt: new Date(`${data.date} ${data.time}`),
        capacity: data.capacity,
      })
      if (submittedEvent) setEventData(submittedEvent)
    } catch (error) {}
  }
  const handleJoin = async (eventId: string) => {
    try {
      const response = await joinEvent(eventId)
      if (response) setEventData(response)
    } catch (error) {}
  }
  const handleLeave = async (eventId: string) => {
    try {
      const response = await leaveEvent(eventId)
      if (response) setEventData(response)
    } catch (error) {}
  }
  const handleEdit = (eventId: string) => {
    console.log(eventId)
  }
  return (
    <PrivateRoute>
      {() => (
        <Events
          onHandleJoin={handleJoin}
          events={events}
          onSubmit={handleSubmit}
          eventLoading={loading}
          onHandleLeave={handleLeave}
          onHandleEdit={handleEdit}
        />
      )}
    </PrivateRoute>
  )
}

EventContainer.displayName = 'EventContainer'
