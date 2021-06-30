import React, { useEffect, useContext, useState, FC } from 'react'
import { getRefreshToken } from '../../../utils/authToken'
import { UserContext } from '../../../store/user/UserContext'
import {PageLoader} from '../PageLoader/PageLoader'
import { ACTIONS } from '../../../enums/constants'

/**
 * PageLoginManager component, take care of private/public routes.
 *
 * @function
 * @param {object} props
 */
const PageLoginManager: FC = ({ children }) => {
  /** Detect when can start rendering child components*/
  const [readyToRender, setReadyToRender] = useState(false)

  const { dispatch } = useContext(UserContext)
  //move refresh token
  const refreshToken = getRefreshToken()

  useEffect(() => {
    const fetchLogin =  () => {
      if (refreshToken) {
        const userData = {
          id: null,
          firstName: '',
          lastName: '',
          email: '',
          isLogged: false,
        }

        dispatch({ type: ACTIONS.LOGIN, user: userData })
      }

      setReadyToRender(true)
    }

    if (!readyToRender) {
      fetchLogin()
    }
  }, [readyToRender, dispatch, refreshToken])

  return <>{readyToRender ? children : <PageLoader />}</>
}

export default PageLoginManager
