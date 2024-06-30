import { API_URL } from '@/constants'
import axios from 'axios'

// ------------------------------------
const axiosApi = axios.create({
  baseURL: API_URL,
})

export default axiosApi
