import { client as axios } from './axios'

export class TasksService {
  private url = '/api/tasks'

  async getApi<T>(method: string, url: string, data?: T): Promise<any> {
    try {
      return await axios({ method, url, data })
    } catch (error: Error | any) {
      console.error('Error: %s', error)
    }
  }

  async getAllTasks() {
    const url = this.url
    return await this.getApi('get', url)
  }

  async createTask(formData: any) {
    const data = Object.fromEntries(formData)
    const url = this.url
    return await this.getApi('post', url, data)
  }

  async updateTask(id: number, data: any) {
    const url = this.url + id
    return await this.getApi('put', url, data)
  }

  async deleteTask(id: number) {
    const url = this.url + id
    return await this.getApi('delete', url)
  }

  async deleteTasks(ids: number[]) {
    const url = this.url
    const data = { ids }
    return await this.getApi('delete', url, data)
  }
}
