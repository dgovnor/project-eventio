import React, { useContext, FC, ReactElement } from 'react'
import Router from 'next/router'
import { ROUTES } from '../enums/routes'
import { isBrowser } from '../utils/isBrowser'
import { PageLoader } from '../ui-kit/components/PageLoader/PageLoader'
import { UserContext } from '../store/user/UserContext'

type Props = {
  children: () => ReactElement
}

export const PublicRoute: FC<Props> = ({ children }) => {
  const { state } = useContext(UserContext)
  const { isLogged } = state

  if (!isLogged) {
    return children()
  }
  if (isBrowser()) {
    Router.push(ROUTES.EVENTS)
  }

  return <PageLoader />
}

PublicRoute.displayName = 'PublicRoute'
