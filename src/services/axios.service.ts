import { API_URL } from '@/constants'
import axios from 'axios'

// ------------------------------------
export const client = axios.create({
  baseURL: API_URL,
})
