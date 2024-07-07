'use client'
import { useCreateTask } from '@/hooks/useCreateTask'
import { FormButton, FormCircle, FormInput, FormRoot } from './Form'

export default function Form() {
  const { handleSubmit, isLoading } = useCreateTask()

  return (
    <FormRoot onSubmit={handleSubmit}>
      <FormCircle />
      <FormInput />
      <FormButton disabled={isLoading} />
    </FormRoot>
  )
}
