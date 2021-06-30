import React, { useContext } from 'react'
import { UserContext } from '../../../store/user/UserContext'
import { Image } from './styled'

/**
 * Logo component
 */
export const Logo = () => {
  const { state } = useContext(UserContext)
  const { isLogged } = state

  const logoPath = isLogged ? 'logo-black' : 'logo-white'

  return (
    <div>
      <Image src={`/icons/${logoPath}.svg`} alt="logo" />
    </div>
  )
}

Logo.displayName = 'Logo'
