import clsx from 'clsx'

export default function LoginButton() {
  return (
    <button
      type='submit'
      className={clsx(
        'mb-2 me-2 w-full rounded-lg px-5 py-2.5',
        'text-lg font-medium text-white',
        'bg-blue-700 hover:bg-blue-800',
        'focus:outline-none focus:ring-4 focus:ring-blue-300',
        'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      )}>
      Sign in
    </button>
  )
}
