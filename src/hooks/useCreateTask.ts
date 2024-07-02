import { AxiosRequestConfig } from 'axios'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

import { client } from '@/services/axios.service'

async function createTask(data: FormData) {
  const clientOptions: AxiosRequestConfig = {
    method: 'post',
    url: '/tasks',
    data,
  }
  await client(clientOptions)
}

export function useCreateTask() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    setIsLoading(true)

    try {
      await createTask(formData)
      toast.success('Successfully created!')
      e.currentTarget.reset()
    } catch (error: Error | any) {
      console.error('Error creating task: ', error)
      toast.error(`Something went wrong:\n ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleSubmit, isLoading }
}
