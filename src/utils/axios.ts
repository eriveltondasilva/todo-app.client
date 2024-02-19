import { API_URL } from '@/config/env'
import axios from 'axios'

// ------------------------------------
const axiosApi = axios.create({
  baseURL: API_URL,
})

// ----------------------------------------------------------------------------
export default async function api(method: string, url: string, data?: any): Promise<any> {
  try {
    return await axios({ method, url, data })
  } catch (error: any) {
    console.error(error)
    throw error
  }
}
