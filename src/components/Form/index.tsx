'use client'
import toast, { Toaster } from 'react-hot-toast'

import useTaskContext from '@/hooks/useTaskContext'
import TaskService from '@/services/task.service'

import FormButton from './FormButton'
import FormCircle from './FormCircle'
import FormInput from './FormInput'
import FormRoot from './FormRoot'

const taskService = new TaskService()

// ==============================================================
export default function Form() {
  const { setTasks } = useTaskContext()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    if (!formData.get('title')) {
      toast.error('Please input a title')
      return
    }

    try {
      const res = await taskService.createTask(formData)

      if (res.status !== 201) {
        toast.error('Failed to create task')
        return
      }

      setTasks((prev) => [...prev!, res.data])
      toast.success('Successfully created!')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error('Error creating task:', error)
      toast.error('An error occurred')
    }
  }

  return (
    <FormRoot onSubmit={handleSubmit}>
      <FormCircle />
      <FormInput />
      <FormButton />
      <Toaster />
    </FormRoot>
  )
}
