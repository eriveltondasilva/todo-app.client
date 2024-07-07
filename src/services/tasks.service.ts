import { AxiosRequestConfig } from 'axios'
import { client } from './axios.service'

const url = '/tasks'

export async function createTask(data: FormData) {
  const clientOptions: AxiosRequestConfig = {
    method: 'post',
    url,
    data,
  }
  await client(clientOptions)
}

export async function updateTask(id: number, data: FormData) {
  const clientOptions: AxiosRequestConfig = {
    method: 'put',
    url: `${url}/${id}`,
    data,
  }
  await client(clientOptions)
}
