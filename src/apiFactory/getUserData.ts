import { User } from "../store/user/type"

/**
 * When user data is gotten from api 
 * here we transform it to correspond with our User type.
 */

export const getUserData = (data: User) => {
  return {
    id: data._id || null,
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    email: data.email || '',
  }
}

