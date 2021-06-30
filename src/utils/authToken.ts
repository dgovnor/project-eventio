import { TOKEN } from '../enums/constants'
import { isBrowser } from './isBrowser'

/**
 * When User log's in store token in local storage
 * 
 * Return token 
 */

const storeAuthToken = (authToken: string) => isBrowser() ? window.localStorage.setItem(TOKEN.AUTH_TOKEN, authToken) : ''

const getAuthToken = () => isBrowser() ? window.localStorage.getItem(TOKEN.AUTH_TOKEN) : ''

const storeRefreshToken = (refreshToken: string) => isBrowser() ? window.localStorage.setItem(TOKEN.REFRESH_TOKEN, refreshToken) : ''
    
const getRefreshToken = () => isBrowser() ? window.localStorage.getItem(TOKEN.REFRESH_TOKEN)  : ''
  

  

export { storeAuthToken, storeRefreshToken, getAuthToken, getRefreshToken }
