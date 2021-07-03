import styled from 'styled-components'
import { theme } from '../../assets/theme'
import {ButtonLink} from '../Button'

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: ${theme.color.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1.875rem 0.5rem;

  @media (min-width: ${theme.viewport.tablet}) {
    padding: 2rem 3rem;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  @media (min-width: ${theme.viewport.tablet}) {
    padding: 0;
  }
`

export const Content = styled.div`
  text-align: center;
  background-color: ${theme.color.white};
  box-shadow: 0 0.125rem 0.1875rem 0 rgba(0, 0, 0, 0.11);
  border-radius: 0.125rem;
  padding: 2rem 1rem;
  box-sizing: border-box;
  overflow: scroll;
  height: 90%;
  max-height: 32rem;
  max-width: 21rem;
  margin: 2rem auto;

  @media (min-width: ${theme.viewport.tablet}) {
    max-width: 30rem;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 47%;
    left: 50%;
    width: 25rem;
    padding: 3rem 2rem;
  }
`

export const Button = styled(ButtonLink)`
  color: ${theme.color.dark};
  text-transform: capitalize;
  transition: ${theme.transition.fast};
  letter-spacing: 0;
  font-family: Hind;
  font-size: ${theme.fontSize.small};
`
export const Icon = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  vertical-align: middle;

  @media (min-width: ${theme.viewport.tablet}) {
    margin-right: 0.5rem;
  }
`

export const Text = styled.span`
  display: none;

  @media (min-width: ${theme.viewport.tablet}) {
    display: inline-block;
  }
`
