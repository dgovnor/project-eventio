import React, { useEffect, useState } from 'react'
import { getAllEvents } from '../../apiFactory/eventApi'
import{PrivateRoute} from '../../routes/PrivateRoute'
import { Events } from './Events'
import { Event } from '../../store/user/type'


export const EventContainer = () => {
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
    try {
        
        const getEvents = await getAllEvents()
  
        setEvents(getEvents)
        setLoading(false)
    // eslint-disable-next-line no-empty
    } catch (error) {}
        }
    
        fetchData()
      }, [])

    const handleJoin = (eventId: string) => {
        console.log(eventId)
    }
    const handleLeave = (eventId: string) => {
        console.log(eventId)
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
                    isLoading={false}
                    eventLoading={loading}
                    onHandleLeave={handleLeave}
                    onHandleEdit={handleEdit}
                />
            )}
        </PrivateRoute>
            
        
    )
}

EventContainer.displayName = 'EventContainer'