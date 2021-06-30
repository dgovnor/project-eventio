import styled from 'styled-components'
import {Button} from '../Button'
import { theme } from '../../assets/theme'

export const FormStyle = styled.form`
  margin-top: 3rem;
`

export const StyledButton = styled(Button)`
  margin-top: 3rem;
`

export const ErrorMsg = styled.div`
  margin-top: 0.5rem;
  color: ${theme.color.violetRed};
`
export const SignUp = styled.div`
  display: block;
  margin-top: 3rem;

  @media (min-width: ${theme.viewport.tablet}) {
    display: none;
  }
`
