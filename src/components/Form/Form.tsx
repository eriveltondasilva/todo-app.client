import { twJoin } from 'tailwind-merge'
type FormRootProps = {
  action: () => Promise<void>
  children: React.ReactNode
}

export function FormRoot({ action, children }: FormRootProps) {
  return (
    <form action={action}>
      <span className='sr-only'>add a new todo</span>
      <div
        className={twJoin(
          'my-8 flex space-x-3 rounded-md px-5 py-3 shadow-lg',
          'bg-surface-light dark:bg-surface-dark',
        )}>
        {children}
      </div>
    </form>
  )
}

export function FormInput() {
  return (
    <input
      type='text'
      placeholder='Create a new todo...'
      name='title'
      id='title'
      className='w-full bg-transparent focus:outline-none'
      autoFocus
    />
  )
}

export function FormCircle() {
  return <div className='h-6 w-6 flex-none rounded-full border'></div>
}

export function FormButton() {
  return (
    <button className='border-none hover:font-bold active:scale-90' type='submit'>
      add
    </button>
  )
}
