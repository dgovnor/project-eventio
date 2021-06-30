import React, { FC, createContext, useReducer } from 'react'
import { ACTIONS } from '../../enums/constants'
import { User } from './type'
import userReducer, {initialState} from './UserReducer'


const UserContext = createContext<{
  state: User
  dispatch: React.Dispatch<{user:User, type:ACTIONS,}>
}>({
  state: initialState,
  dispatch: () => null,
})

/**
 * Context for users dispatch
 */
const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
