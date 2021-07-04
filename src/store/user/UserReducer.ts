import { User } from './type'
import { storeRefreshToken, storeAuthToken } from '../../utils/authToken'
import { ACTIONS } from '../../enums/constants'

export const initialState: User = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  isLogged: false,
}
/**
 * User reducer
 *
 * @function
 * @param {object} state
 * @param {object} action
 */
const userReducer = (state: User, action: { user: User; type: ACTIONS }) => {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      const { id, firstName, lastName, email } = action.user
      return {
        ...state,
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        isLogged: true,
      }
    }

    case ACTIONS.LOGOUT:
      storeRefreshToken('')
      storeAuthToken('')

      return {
        ...state,
        ...initialState,
      }

    default:
      return state
  }
}

export default userReducer
