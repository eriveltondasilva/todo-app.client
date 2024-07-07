import { twJoin } from 'tailwind-merge'

import Form from '@/components/Form'
import Header from '@/components/Header'
import Todo from '@/components/Todo'

export default function Home() {
  return (
    <main
      className={twJoin(
        'mx-6 min-w-80 py-16',
        'sm:mx-auto sm:max-w-lg',
        'text-slate-800 dark:text-white',
      )}>
      <Header />
      <Form />
      <Todo />
    </main>
  )
}
