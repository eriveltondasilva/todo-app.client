import api from '@/utils/axios'

// ============================================================================
export async function login(data: any) {
  const url = '/api/auth/login'
  return await api('post', url, data)
}

export async function logout(data: any) {
  const url = '/api/auth/login'
  return await api('post', url, data)
}

export async function refresh(data: any) {
  const url = '/api/auth/refresh-token'
  return await api('post', url, data)
}
