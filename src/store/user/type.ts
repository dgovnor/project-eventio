import { FILTER } from '../../enums/constants'

export type User = {
  id: string | null
  firstName: string
  lastName: string
  email: string
  isLogged?: boolean
  _id?: string
}

export type Event = {
  id: string
  title: string
  capacity: number
  description: string
  createdAt: string
  startsAt: string
  updatedAt: string
  attendees: readonly User[]
  owner: User
  _id?: string
}

export type EventData = {
  title: string
  description: string
  date: string
  time: string
  capacity: number
}
export type NewEventData = {
  title: string
  description: string
  startsAt: Date
  capacity: number
}
export type FILTER_KEYS = keyof typeof FILTER
export type FILTER_VALUES = typeof FILTER[FILTER_KEYS]
