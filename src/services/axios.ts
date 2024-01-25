import { API_URL } from '@/config/constants'
import axios from 'axios'

// ------------------------------------
const axiosApi = axios.create({
  baseURL: API_URL + '/api/',
})

export default axiosApi
