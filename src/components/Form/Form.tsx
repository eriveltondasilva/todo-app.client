import { FormEvent } from 'react'
import { twJoin } from 'tailwind-merge'

type FormRootProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
  children: React.ReactNode
}

export function FormRoot({ onSubmit, children }: FormRootProps) {
  return (
    <form onSubmit={onSubmit}>
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

export function FormButton({ disabled = false }) {
  const buttonClasses = twJoin(
    disabled
      ? 'cursor-not-allowed opacity-50'
      : 'border-none hover:font-bold active:scale-90',
  )

  return (
    <button disabled={disabled} className={buttonClasses} type='submit'>
      add
    </button>
  )
}
