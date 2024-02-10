import Form from '@/components/Form'
import Header from '@/components/Header'
import Todo from '@/components/Todo'

// ==============================================================================
export default function Home() {
  return (
    <main className='mx-6 min-w-80 py-16 text-slate-800 dark:text-white sm:mx-auto sm:max-w-lg'>
      <Header />
      <Form />
      <Todo />
    </main>
  )
}
