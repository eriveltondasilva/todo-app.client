import api from '@/utils/axios'

// ============================================================================
export async function getAllTasks() {
  const url = '/api/tasks'
  return await api('get', url)
}

// -----------------------------------------------------------------------------
export async function createTask(formData: any) {
  const data = Object.fromEntries(formData)
  const url = '/api/tasks'
  return await api('post', url, data)
}

// ----------------------------------------------------------------------------
export async function updateTask(id: number, data: any) {
  const url = `/api/tasks/${id}`
  return await api('put', url, data)
}

// ----------------------------------------------------------------------------
export async function deleteTask(id: number) {
  const url = `/api/tasks/${id}`
  return await api('delete', url)
}

// ----------------------------------------------------------------------------
export async function deleteTasks(ids: number[]) {
  const url = '/api/tasks'
  const data = { ids }
  return await api('delete', url, data)
}
