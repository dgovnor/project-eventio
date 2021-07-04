import React, { FC, ButtonHTMLAttributes } from 'react'
import { Button } from './styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  iconUrl?: string
}

/**
 * button, that looks like link
 *
 */
export const ButtonLink: FC<ButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}

ButtonLink.displayName = 'ButtonLink'
