// eslint-disable-next-line import/named
import styled from 'styled-components'
import { COLOR } from '../../../enums/constants'
import { theme } from '../../assets/theme'

const Button = styled.button`
  display: block;
  font-size: ${theme.fontSize.small};
  background-color: ${(props: { color?: string }) => props.color};
  color: ${(props) => props.color === COLOR.NORMAL ? '#A9AEB4' : theme.color.white };
  font-family: Hind medium;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 0.25rem;
  text-transform: uppercase;
  transition: ${theme.transition.fast};

  &:hover {
    filter: ${(props) =>
      props.disabled ? 'brightness(100%)' : 'brightness(85%)'};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
  &:focus {
    outline: 0;
  }
`

export const BigButton = styled(Button)`
  width: 15rem;
  height: 3.5rem;
`

export const SmallButton = styled(Button)`
  display: inline-block;
  width: 6.25rem;
  height: 2rem;
`
