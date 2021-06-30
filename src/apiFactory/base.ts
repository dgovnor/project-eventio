import axios from 'axios'
import { getAuthToken } from '../utils/authToken';
import { SETTINGS } from './apiSettings';

const simpleAuthHeader = {
    'Content-Type': 'application/json',
    Authorization: getAuthToken(),
    apiKey: SETTINGS.API_KEY
};
  
 export const Api = axios.create({
    baseURL: SETTINGS.API_URL,
    headers: simpleAuthHeader
})