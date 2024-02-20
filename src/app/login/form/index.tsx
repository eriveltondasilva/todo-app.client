'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import FormRoot from './FormRoot'
import FormTitle from './FormTitle'

// import { login } from '@/services/authApi'
// import toast, { Toaster } from 'react-hot-toast'

// ===============================================================================
export default function FormIndex() {
  // const { setUser } = useAuthContext()

  async function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault()
    // const formData = new FormData(e.currentTarget as HTMLFormElement)
    // const res = await login(formData)
    // if (!res?.ok) {
    //   toast.error(res.message)
    // }
    // setUser(res?.data.user)
    //
    console.log('login')
  }

  return (
    <FormRoot onSubmit={handleSubmit}>
      <FormTitle>Sign in to your account</FormTitle>
      <Input
        id='email'
        name='email'
        type='email'
        label='Email'
        placeholder='name@exemple.com'
        autoFocus
        required
      />
      <Input
        id='password'
        name='password'
        type='password'
        label='Password'
        placeholder='••••••••'
        required
      />
      <Button type='submit'>Sign in</Button>

      {/* <Toaster /> */}
    </FormRoot>
  )
}
