/* eslint-disable no-empty */
import React, { useEffect,  useRef,  useState } from 'react'
import {
  addNewEvent,
  getAllEvents,
  joinEvent,
  leaveEvent,
} from '../../apiFactory/eventApi'
import { Events } from './Events'
import { Event, EventData } from '../../store/user/type'

export const EventContainer = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

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
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])
  
  useEffect(() => {
    if (isMounted.current) {
      getData()
      
    }
  }, [])

  const handleSubmit = async (data: EventData) => {
    try {
      const submittedEvent = await addNewEvent({
        title: data.title,
        description: data.description,
        startsAt: new Date(`${data.date} ${data.time}`),
        capacity: data.capacity,
      })
      if (submittedEvent) getData()
    } catch (error) {}
  }
  const handleJoin = async (eventId: string) => {
    try {
      const response = await joinEvent(eventId)
      if (response) getData()
    } catch (error) {}
  }
  const handleLeave = async (eventId: string) => {
    try {
      const response = await leaveEvent(eventId)
      if (response) getData()
    } catch (error) {}
  }
  const handleEdit = (eventId: string) => {
    console.log(eventId)
  }
  return (
    
        <Events
          onHandleJoin={handleJoin}
          events={events}
          onSubmit={handleSubmit}
          eventLoading={loading}
          onHandleLeave={handleLeave}
          onHandleEdit={handleEdit}
        />
  )
}

EventContainer.displayName = 'EventContainer'
