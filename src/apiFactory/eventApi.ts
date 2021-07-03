import { STATUS_CODE, URLs} from '../enums/constants'
import { Api } from './base'
import { Event, NewEventData } from '../store/user/type'
import { transformEventData } from './transformData'

const api = Api()
export const getAllEvents = async () => {
    try {
        const response = await api.get(URLs.EVENTS)
        const events = response.data.map((event: Event) => transformEventData(event))
        
        return events
        
    } catch (error) {
        throw new Error(error)
    }
}

export const addNewEvent = async (data:NewEventData) => {
    try {
        const response = await api.post(URLs.EVENTS, data)
        if (response.status === STATUS_CODE.CREATED) {
            return transformEventData(response.data)
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const joinEvent = async (eventId: string) => {
    try {
        const response = await api.post(`${URLs.EVENTS}/${eventId}/attendees/me`)
        if (response.status === STATUS_CODE.OK) {
            return transformEventData(response.data)
        }
    } catch (error) {
        throw new Error(error)
    }
}
export const leaveEvent = async (eventId: string) => {
    try {
        const response = await api.delete(`${URLs.EVENTS}/${eventId}/attendees/me`)
        if (response.status === STATUS_CODE.OK) {
            return transformEventData(response.data)
        }
    } catch (error) {
        throw new Error(error)
    }
}