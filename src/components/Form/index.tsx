'use client'
import { FormEvent } from 'react'
import { Toaster } from 'react-hot-toast'

import useTaskContext from '@/hooks/useTaskContext'

import { FormButton, FormCircle, FormInput, FormRoot } from './Form'

// ==============================================================
export default function Form() {
  const { setTasks } = useTaskContext()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget)
    console.log(formData.get('title'))
    // const formData = new FormData(e.currentTarget as HTMLFormElement)

    // if (!formData?.get('title')) return

    // const res = ''

    // //
    // if (res?.status !== 201) return

    // setTasks((prev) => [...prev!, res?.data])
    // toast.success('Successfully created!')
    // ;(e.target as HTMLFormElement).reset()
  }

  return (
    <FormRoot action={handleSubmit}>
      <FormCircle />
      <FormInput />
      <FormButton />
      <Toaster />
    </FormRoot>
  )
}
