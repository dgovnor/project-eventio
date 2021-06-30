import React, { FC, ButtonHTMLAttributes } from 'react'
import { BigButton, SmallButton } from './styled'
import {Loader} from '../Loader'
import { COLOR, SIZES } from '../../../enums/constants'


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: COLOR,
  size: SIZES,
  isLoading?: boolean,
}

/**
 * Button
 */
export const Button: FC<Props> = ({type, isLoading, size, children, ...rest}) => {
  const ComponentButton =
    size === SIZES.BIG ? BigButton : SmallButton

  return (
    <ComponentButton type={type} {...rest}>
      {isLoading ? <Loader /> : children}
    </ComponentButton>
  )
}

Button.displayName = 'Button'
