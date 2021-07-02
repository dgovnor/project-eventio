import {STATUS_CODE, URLs} from '../enums/constants'
import { storeAuthToken, storeRefreshToken } from '../utils/authToken'
import { simpleAuthHeader } from './base'
import axios from 'axios'
import { transformUserData } from './transformData'
import { SETTINGS } from './apiSettings'

export const loginUser = async (data: {}) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${SETTINGS.API_URL}/${URLs.AUTH}`,
            data,
            headers: simpleAuthHeader
        })
        if (response.status === STATUS_CODE.OK) {
            const authToken = response.headers.authorization
            const refreshToken = response.headers['refresh-token']

            storeAuthToken(authToken)
            storeRefreshToken(refreshToken)
            return transformUserData(response.data)
            
        }
        
    } catch (error) {
        throw new Error(error)
    }
}
export const refreshToken = async (token: string) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${SETTINGS.API_URL}/${URLs.AUTH}`,
            data: token,
            headers: simpleAuthHeader
        })
        if (response.status === STATUS_CODE.OK) {
            const authToken = response.headers.authorization

            storeAuthToken(authToken)
            return transformUserData(response.data)
            

        }
        
    } catch (error) {
        throw new Error(error)
    }
}