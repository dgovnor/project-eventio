export enum TOKEN {
  AUTH_TOKEN = 'authorization-token',
  REFRESH_TOKEN = 'refresh-token',
}

export enum ACTIONS {
  LOGIN,
  LOGOUT,
}

export enum COLOR {
  PRIMARY = '#22D486',
  SECONDARY = '#F02C7A',
  NORMAL = '#D9DCE1',
  THIRD = '#323C46',
}

export enum SIZES {
  BIG,
  SMALL,
}

export enum URLs {
  AUTH = 'auth/native',
  EVENTS = 'events',
}

export enum STATUS_CODE {
  OK = 200,
  UNAUTHORIZED = 401,
  CREATED = 201,
}

export const FILTER = {
  ALL: 'all',
  PAST: 'past',
  FUTURE: 'future',
}
