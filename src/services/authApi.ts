import axios from './axios'

// ============================================================================

export default function authApi() {
  return {
    login: (data: any) => axios('POST', 'auth/login', data),
  }
}
