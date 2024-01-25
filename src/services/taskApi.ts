import axios from './axios'

// ============================================================================
async function api(method: string, url: string, data?: any): Promise<any> {
  try {
    return await axios({ method, url, data })
  } catch (error: any) {
    console.error(error)
    throw error
  }
}

// -----------------------------------------------------------------------------
export async function getAllTasks() {
  const url = 'api/tasks'
  return api('get', url)
}

// -----------------------------------------------------------------------------
export async function createTask(formData: any) {
  const data = Object.fromEntries(formData)
  const url = 'api/tasks'
  return api('post', url, data)
}

// ----------------------------------------------------------------------------
export async function updateTask(id: number, data: any) {
  const url = `api/tasks/${id}`
  return api('put', url, data)
}

// ----------------------------------------------------------------------------
export async function deleteTask(id: number) {
  const url = `api/tasks/${id}`
  return api('delete', url)
}

// ----------------------------------------------------------------------------
export async function deleteTasks(ids: number[]) {
  const url = 'api/tasks'
  const data = { ids }
  return api('delete', url, data)
}
