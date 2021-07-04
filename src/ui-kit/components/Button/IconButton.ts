import styled from 'styled-components'
import { ButtonLink } from './ButtonLink'
import { theme } from '../../assets/theme'

export const IconButton = styled(ButtonLink)`
  background: url(${(props) => props.iconUrl});
  width: 1.5rem;
  height: 1.5rem;
  transition: ${theme.transition.slower};
  filter: brightness(${(props) => (props.isActive ? '20%' : '100%')});

  &:hover {
    filter: brightness(20%);
  }
`
IconButton.displayName = 'IconButton'
