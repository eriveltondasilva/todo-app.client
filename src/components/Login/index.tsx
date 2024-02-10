import FormButton from './LoginButton'
import LoginForm from './LoginForm'
import LoginInputEmail from './LoginInputEmail'
import LoginInputPassword from './LoginInputPassword'
import LoginRoot from './LoginRoot'
import LoginTitle from './LoginTitle'

// ===============================================================================
export default function LoginIndex() {
  function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault()
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
    </LoginRoot>
  )
}
