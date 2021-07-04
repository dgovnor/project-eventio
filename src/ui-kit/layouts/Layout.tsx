import React, { FC } from 'react'
import { Header } from '../../pages/Events/Header'
import { Logo } from '../components/Logo'
import { Text, Link } from '../components/Typography'
import {
  PublicWrapper,
  PrivateWrapper,
  LeftSide,
  RightSide,
  SignUp,
  BottomText,
  Bottom,
  Divider,
  PublicContent,
  PrivateContent,
} from './styled'

/**
 * Page layout for public pages - two column layout,
 * content renders on right side center
 */
export const PublicLayout: FC = ({ children }) => {
  return (
    <PublicWrapper>
      <LeftSide>
        <Logo />
        <Bottom>
          <BottomText>
            “Great, kid.Don’t <br />
            get cocky.”
          </BottomText>
          <Divider />
          <Text>Han Solo</Text>
        </Bottom>
      </LeftSide>

      <RightSide>
        <SignUp>
          <Text>Don’t have account?</Text>

          {/**Just add sign up link*/}
          <Link href="#register"> SIGN UP</Link>
        </SignUp>
        <PublicContent>{children}</PublicContent>
      </RightSide>
    </PublicWrapper>
  )
}

/**
 * Page layout for private pages - two row layout,
 * header renders on top and content below
 */
export const PrivateLayout: FC = ({ children }) => {
  return (
    <PrivateWrapper>
      <Header />
      <PrivateContent>{children}</PrivateContent>
    </PrivateWrapper>
  )
}
