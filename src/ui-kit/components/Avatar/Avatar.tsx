import React, { FC } from 'react'
import { getInitials } from '../../../utils/getInitials'

import { Wrapper } from './styled'

/**
 * Avatar shows the initials of the user
 */
interface AvatarProps{
  name: string
}
export const Avatar:FC<AvatarProps> = ({name}) => {

  return <Wrapper>{getInitials(name)}</Wrapper>
}

Avatar.displayName = 'Avatar'
