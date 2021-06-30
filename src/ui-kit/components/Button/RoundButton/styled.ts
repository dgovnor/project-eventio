import styled from 'styled-components'
import { theme } from '../../../assets/theme'

export const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  border: none;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  box-shadow: 0 0.375rem 0.5625rem 0 rgba(0, 0, 0, 0.15);
  background-color: ${theme.color.dark};
  transition: ${theme.transition.slower};

  &:hover {
    cursor: pointer;
    filter: brightness(130%);
  }

  &:focus {
    outline: 0;
  }
`
