import React, { ButtonHTMLAttributes, FC, ReactElement } from 'react'
import { Button } from './styled'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly icon: string
}

/**
 * Button that is round
 */
export const RoundButton: FC<Props> = ({ icon, ...rest }): ReactElement => {
  return (
    <Button {...rest}>
      <img src={icon} alt="button" />
    </Button>
  )
}

RoundButton.displayName = 'RoundButton'
