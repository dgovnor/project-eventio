import React, { FC, createContext, useReducer } from 'react'
import { User } from './type'
import userReducer, {initialState} from './UserReducer'


const UserContext = createContext<{
  state: User
  dispatch: React.Dispatch<any>
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
