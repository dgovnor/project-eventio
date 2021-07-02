import { Event, User } from '../store/user/type'

/**
 * Transform events data from API.
 *
 * @function
 * @param {Object} data api data
 * @return {Object} transformed app data
 */

export const transformEventData = (data: Event): Event => {
  return {
    id: data._id || '',
    title: data.title || '',
    description: data.description || '',
    startsAt: data.startsAt || '',
    capacity: data.capacity || 0,
    createdAt: data.createdAt || '',
    updatedAt: data.updatedAt || '',
    owner: {
      id: data.owner.id || '',
      firstName: data.owner.firstName || '',
      lastName: data.owner.lastName || '',
      email: data.owner.email || ''
    },
    attendees: data.attendees.map((attendee: User) => {
      return { 
        id: attendee._id || '',
        firstName: attendee.firstName || '',
        lastName: attendee.lastName || '',
        email: attendee.email || ''
      }
    }),
  }
}

export const transformUserData = (data: User) => {
  return {
    id: data._id || null,
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    email: data.email || '',
  }
}

