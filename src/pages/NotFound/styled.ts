import styled from 'styled-components'
import {Button} from '../../ui-kit/components/Button'
import { Subtitle } from '../../ui-kit/components/Typography'
import { theme } from '../../ui-kit/assets/theme'

export const StyledButton = styled(Button)`
  margin-top: 3rem;
  display: inline-block;
`

export const Text = styled(Subtitle)`
  margin-top: 1rem;

  @media (min-width: ${theme.viewport.tablet}) {
    
  }
`

export const Image = styled.img`
  position: absolute;
  width: 15.5rem;
  height: 15rem;
  transform: translateY(-50%);
  top: 50%;
  left: -6rem;

  @media (min-width: ${theme.viewport.tablet}) {
    width: 20.5rem;
    height: 20rem;
  }

  @media (min-width: ${theme.viewport.desktop}) {
    width: 25.5rem;
    height: 25rem;
  }
`
