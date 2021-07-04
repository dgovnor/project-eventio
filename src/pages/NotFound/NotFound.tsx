import React from 'react'
import { Title } from '../../ui-kit/components/Typography'
import { PublicLayout } from '../../ui-kit/layouts/Layout'
import { StyledButton, Text, Image } from './styled'
import { COLOR, SIZES } from '../../enums/constants'
import { ROUTES } from '../../enums/routes'
import { useHistory } from 'react-router-dom'

export const NotFound = () => {
  const history = useHistory()

  /** Redirect to login */
  const handleRedirect = () => history.push(ROUTES.HOMEPAGE)

  return (
    <PublicLayout>
      <Image src="/human_robot.svg" alt="i am your father" />

      <Title>404 Error - page not found</Title>
      <Text>
        Seems like Darth Vader just hits our website and drops it down. Please
        press the refresh button and everything should be fine again.
      </Text>

      <StyledButton
        size={SIZES.BIG}
        color={COLOR.THIRD}
        onClick={handleRedirect}
      >
        Refresh
      </StyledButton>
    </PublicLayout>
  )
}

NotFound.displayName = 'NotFound'
