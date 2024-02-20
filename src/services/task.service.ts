import AxiosService from './axios.service'
const axios = new AxiosService()

// ============================================================================

class TaskService {
  private readonly TASK_URL = '/tasks'
  private api = axios

  //
  async getAllTasks() {
    const url = this.TASK_URL
    const method = 'GET'

    return await this.api.callApi({ method, url })
  }

  async createTask(formData: any) {
    const data = Object.fromEntries(formData)
    const url = this.TASK_URL
    const method = 'POST'

    return await this.api.callApi({ method, url, data })
  }

  async updateTask(id: number, formData: any) {
    const data = Object.fromEntries(formData)
    const url = this.TASK_URL + id
    const method = 'PUT'

    return await this.api.callApi({ method, url, data })
  }

  async deleteTask(id: number) {
    const url = this.TASK_URL + id
    const method = 'DELETE'

    return await this.api.callApi({ method, url })
  }

  async deleteTasks(ids: number[]) {
    const data = { ids }
    const url = '/api/tasks'
    const method = 'DELETE'

    return await this.api.callApi({ method, url, data })
  }
}

export default TaskService
