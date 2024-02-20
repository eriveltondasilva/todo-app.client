'use client'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

import Button from '@/components/Button'
import Input from '@/components/Input'
import AuthService from '@/services/auth.service'
import FormRoot from './FormRoot'
import FormTitle from './FormTitle'

const authService = new AuthService()

// ============================================================================
export default function FormIndex() {
  // const { setUser } = useAuthContext()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      // get form data
      const formData = new FormData(e.currentTarget)

      const res = await authService.login(formData)

      console.log(res.data.user)
      router.push('/')
    } catch (error: any) {
      if (error.response) {
        const { email, password } = error.response.data.validations

        if (email) {
          toast.error(email)
          return
        }

        if (password) {
          toast.error(password)
        }
      }

      console.error(error.message)
    }
  }

  return (
    <FormRoot onSubmit={handleSubmit}>
      <FormTitle>Sign in to your account</FormTitle>

      {/* input with type email */}
      <Input
        id='email'
        name='email'
        type='email'
        label='Email'
        placeholder='name@exemple.com'
        autoFocus
        required
      />

      {/* input with type password */}
      <Input
        id='password'
        name='password'
        type='password'
        label='Password'
        placeholder='••••••••'
        required
      />

      {/* button with type submit */}
      <Button type='submit'>Sign in</Button>

      <Toaster />
    </FormRoot>
  )
}
