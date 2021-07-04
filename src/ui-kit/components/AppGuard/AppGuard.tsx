import React, { useEffect, useContext, useState, FC } from 'react'
import { getRefreshToken } from '../../../utils/authToken'
import { refreshToken } from '../../../apiFactory/userApi'
import { UserContext } from '../../../store/user/UserContext'
import { PageLoader } from '../PageLoader/PageLoader'
import { ACTIONS } from '../../../enums/constants'

/**
 * AppGuard component, take care of private/public routes.
 *
 * @function
 * @param {object} props
 */
//TODO: Refactor this code
export const AppGuard: FC = ({ children }) => {
  /** Detect when can start rendering child components*/
  const [readyToRender, setReadyToRender] = useState(false)

  const { dispatch } = useContext(UserContext)
  //move refresh token
  const token = getRefreshToken()

  useEffect(() => {
    const fetchLogin = async () => {
      if (token) {
        const data = await refreshToken(token)

        dispatch({ type: ACTIONS.LOGIN, user: data })
      }

      setReadyToRender(true)
    }

    if (!readyToRender) {
      fetchLogin()
    }
  }, [readyToRender, dispatch, token])

  return <>{readyToRender ? children : <PageLoader />}</>
}

AppGuard.displayName = 'AppGuard'
