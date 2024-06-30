'use client'
import toast, { Toaster } from 'react-hot-toast'

import useTaskContext from '@/hooks/useTaskContext'
import * as api from '@/services/tasks.service'

import FormButton from './FormButton'
import FormCircle from './FormCircle'
import FormInput from './FormInput'
import FormRoot from './FormRoot'

// ==============================================================
export default function Form() {
  const { setTasks } = useTaskContext()

  async function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget as HTMLFormElement)

    if (!formData?.get('title')) return

    const res = await api.createTask(formData)

    //
    if (res?.status !== 201) return

    setTasks((prev) => [...prev!, res?.data])
    toast.success('Successfully created!')
    ;(e.target as HTMLFormElement).reset()
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
