import { URLs} from '../enums/constants'
import { Api } from './base'
import { Event } from '../store/user/type'
import { transformEventData } from './transformData'

export const getAllEvents = async () => {
    const api = Api()
    try {
        const response = await api.get(URLs.EVENTS)
        const events = response.data.map((event: Event) => transformEventData(event))
        
        return events
        
    } catch (error) {
        throw new Error(error)
    }
}