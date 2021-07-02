import axios from 'axios'
import { getAuthToken } from '../utils/authToken';
import { SETTINGS } from './apiSettings';

//TODO: Refactor this base file

export const simpleAuthHeader = {
    'Content-Type': 'application/json',
    apiKey: SETTINGS.API_KEY
};
 export const Api = () =>  axios.create({
    baseURL: SETTINGS.API_URL,
    headers: {...simpleAuthHeader, Authorization: getAuthToken()} 
})