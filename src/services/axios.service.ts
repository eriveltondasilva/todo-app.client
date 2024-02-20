import { API_URL } from '@/config/env'
import axios, { type AxiosRequestConfig } from 'axios'

// ------------------------------------
class AxiosService {
  private instance = axios.create({
    baseURL: API_URL,
  })

  //
  async callApi(axiosConfig: AxiosRequestConfig) {
    try {
      return await this.instance(axiosConfig)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default AxiosService
