import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

import { createTask } from '@/services/tasks.service'

export function useCreateTask() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    setIsLoading(true)

    try {
      await createTask(formData)
      toast.success('Successfully created!')
      //
    } catch (error: Error | any) {
      console.error('Error creating task:', error)
      toast.error('Something went wrong:\n', error.message)
      //
    } finally {
      setIsLoading(false)
      e.currentTarget.reset()
    }
  }

  return { handleSubmit, isLoading }
}
