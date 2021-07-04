import styled from 'styled-components'
import { theme } from '../../../assets/theme'
import { ButtonProps } from './ButtonLink'

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: unset;
  font-size: 12px;
  color: ${(props) => (props.isActive ? theme.color.dark : '#A9AEB4')};
  letter-spacing: 1px;
  font-family: Hind medium;
  font-weight : 600;
  text-transform: uppercase;
  transition: ${theme.transition.fast};

  &:hover {
    cursor: pointer;
    color: ${theme.color.dark};
  }

  &:focus {
    outline: 0;
  }
`
