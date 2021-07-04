import React, { useContext } from 'react'
import { UserContext } from '../../../store/user/UserContext'
import { Avatar } from '../../../ui-kit/components/Avatar'
import { Logo } from '../../../ui-kit/components/Logo'
import { HeaderWrap, User, MenuButton } from './styled'
import { ACTIONS } from '../../../enums/constants'
import { Menu } from '../../../ui-kit/components/Menu'

/**
 * Header component with logo and user menu
 *
 * @function
 */
export const Header = () => {
  const { state, dispatch } = useContext(UserContext)
  const { firstName, lastName } = state

  /**
   * Handler for logout button
   */
  const handleLogout = () => dispatch({ type: ACTIONS.LOGOUT })

  return (
    <HeaderWrap>
      <Logo />
      <User>
        <Avatar name={`${firstName} ${lastName}`} />
        <Menu name={`${firstName} ${lastName}`}>
          <MenuButton type="button">Profile</MenuButton>
          <MenuButton onClick={handleLogout} type="button">
            Logout
          </MenuButton>
        </Menu>
      </User>
    </HeaderWrap>
  )
}

Header.displayName = 'Header'
