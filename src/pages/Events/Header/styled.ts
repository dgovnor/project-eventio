import styled from 'styled-components'
import { theme } from '../../../ui-kit/assets/theme'
import { ButtonLink } from '../../../ui-kit/components/Button'

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const User = styled.div`
  display: flex;
  align-items: center;
`

export const MenuButton = styled(ButtonLink)`
  text-transform: capitalize;
  display: block;
  text-align: left;
  font-size: ${theme.fontSize.small};
  font-family: Hind medium;
`
