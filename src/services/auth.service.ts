import AxiosService from './axios.service'
const axios = new AxiosService()

// ============================================================================
class AuthService {
  private readonly LOGIN_URL = '/auth/login'
  private readonly LOGOUT_URL = '/auth/logout'
  private readonly REFRESH_URL = '/auth/refresh-token'
  private api = axios

  //
  async login(formData: any) {
    const data = Object.fromEntries(formData)
    const url = this.LOGIN_URL
    const method = 'POST'

    return await this.api.callApi({ method, url, data })
  }

  async logout() {
    const url = this.LOGOUT_URL
    const method = 'POST'

    return await this.api.callApi({ method, url })
  }

  async refresh() {
    const url = this.REFRESH_URL
    const method = 'POST'

    return await this.api.callApi({ method, url })
  }
}

export default AuthService
