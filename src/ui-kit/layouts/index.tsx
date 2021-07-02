import React, { useContext, FC } from 'react'
import { UserContext } from '../../store/user/UserContext'
import{ PublicLayout, PrivateLayout} from './Layout'

/**
 * Render page layout for public pages (/login, /register)
 */
const renderPublicPage: FC = ({ children }) => {
  return <PublicLayout> {children} </PublicLayout>
}

/**
 * Render page layout for private pages (/events, /profile...)
 */
const renderPrivatePage: FC = ({ children }) => {
  return <PrivateLayout> {children} </PrivateLayout>
}

/**
 * Layout component
 */
const Layout: FC = ({ children }) => {
  const { state } = useContext(UserContext)
  const { isLogged } = state

  return (
    <>
      {isLogged
        ? renderPrivatePage({ children })
        : renderPublicPage({ children })}
    </>
  )
}

export default Layout
