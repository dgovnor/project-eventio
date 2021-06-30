import React, { FC } from 'react'
import { Logo } from '../../components/Logo'
import { Text, Link } from '../../components/Typography'
import {
  Wrapper,
  LeftSide,
  RightSide,
  SignUp,
  BottomText,
  Bottom,
  Divider,
  Content,
} from './styled'

/**
 * Page layout for public pages - two column layout,
 * content renders on right side center
 */
export const PublicLayout: FC = ({ children }) => {
  return (
    <Wrapper>
      <LeftSide>
        <Logo/>
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
        <Content>{children}</Content>
      </RightSide>
    </Wrapper>
  )
}

PublicLayout.displayName = 'PublicLayout'