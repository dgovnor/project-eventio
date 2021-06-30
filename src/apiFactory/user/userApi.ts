import {STATUS_CODE, URLs} from '../../enums/constants'
import { storeAuthToken, storeRefreshToken } from '../../utils/authToken'
import { Api } from '../base'
import { getUserData } from '../getUserData'

export const loginUser = async (data: {} ) => {
    try {
        const response = await Api.post(URLs.AUTH, data)
        if (response.status === STATUS_CODE.OK) {
            const authToken = response.headers.authorization
            const refreshToken = response.headers['refresh-token']

            storeAuthToken(authToken)
            storeRefreshToken(refreshToken)

            // const { data: userData } = response.data
            const finalData = getUserData(response.data)
            
            return finalData

        }
        
    } catch (error) {
        throw new Error(error)
    }
}