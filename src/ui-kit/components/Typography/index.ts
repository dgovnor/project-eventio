import styled from 'styled-components'
import { theme } from '../../assets/theme'

export const Title = styled.span`
  display: block;
  font-size: ${theme.fontSize.middle};
  font-family: Hind;
  color: ${theme.color.dark};
  line-height: 1.5;

  @media (min-width: ${theme.viewport.tablet}) {
    font-size: ${theme.fontSize.big};
  }
`

export const Text = styled.span`
  font-size: ${theme.fontSize.normal};
  font-family: Hind medium;
  color: ${theme.color.normal};
`

export const Subtitle = styled.span`
  display: block;
  font-size: ${theme.fontSize.small};
  font-family: Hind;
  color: ${theme.color.light};
  line-height: 1.5;

  @media (min-width: ${theme.viewport.tablet}) {
    font-size: ${theme.fontSize.normal};
  }
`

export const Link = styled.a`
  color: ${theme.color.normal};
  font-size: ${theme.fontSize.normal};
  font-family: Hind medium;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: black;
  }
`
