import styled from 'styled-components'
import { theme } from '../../assets/theme'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`

const Column = styled.div`
  padding: 2rem 1rem;
  position: relative;

  @media (min-width: ${theme.viewport.tablet}) {
    padding: 2rem 1rem;
  }

  @media (min-width: ${theme.viewport.desktop}) {
    padding: 2rem 3rem;
  }
`

export const LeftSide = styled(Column)`
  display: none;

  @media (min-width: ${theme.viewport.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    background: url('/side_background.png') #323c46 no-repeat;
    background-size: 100%;
    background-size: cover;
    background-position: center;
  }
`

export const RightSide = styled(Column)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${theme.viewport.tablet}) {
    width: 75%;
  }
`

export const SignUp = styled.div`
  display: none;

  @media (min-width: ${theme.viewport.tablet}) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 2rem;
  }

  @media (min-width: ${theme.viewport.desktop}) {
    right: 3rem;
  }
`

export const BottomText = styled.span`
  font-family: Playfair;
  font-size: ${theme.fontSize.big};
  color: ${theme.color.white};
  display: block;

  @media (min-width: ${theme.viewport.desktop}) {
    font-size: ${theme.fontSize.biggest};
  }
`

export const Bottom = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

export const Divider = styled.div`
  margin: 1rem auto;
  display: block;
  width: 0.75rem;
  height: 0.125rem;
  background-color: ${theme.color.green};
`

export const Content = styled.div`
  text-align: center;
  max-width: 500px;
  padding: 2rem;

  @media (min-width: ${theme.viewport.tablet}) {
    text-align: left;
    width: 50%;
  }
`
