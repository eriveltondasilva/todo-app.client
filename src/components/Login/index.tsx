import FormButton from './LoginButton'
import LoginForm from './LoginForm'
import LoginInputEmail from './LoginInputEmail'
import LoginInputPassword from './LoginInputPassword'
import LoginRoot from './LoginRoot'
import LoginTitle from './LoginTitle'

// import { login } from '@/services/authApi'
// import toast, { Toaster } from 'react-hot-toast'

// ===============================================================================
export default function LoginIndex() {
  // const { setUser } = useAuthContext()

  async function handleSubmit(e: React.FormEvent<EventTarget>) {
    // e.preventDefault()
    // const formData = new FormData(e.currentTarget as HTMLFormElement)
    // const res = await login(formData)
    // if (!res?.ok) {
    //   toast.error(res.message)
    // }
    // setUser(res?.data.user)
    //
  }

  return (
    <LoginRoot>
      <LoginTitle />
      <LoginForm onSubmit={handleSubmit}>
        <LoginInputEmail />
        <LoginInputPassword />
        <FormButton />
      </LoginForm>
      {/* <Toaster /> */}
    </LoginRoot>
  )
}
