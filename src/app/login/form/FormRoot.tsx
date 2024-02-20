import { clsx } from 'clsx'

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

// ============================================================================
function FormRoot({ children, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <div
        className={clsx(
          'flex flex-col items-center justify-center md:h-screen',
          'mx-auto px-6 py-8 lg:py-0',
        )}>
        <div
          className={clsx(
            'w-full rounded-lg shadow dark:border sm:max-w-md md:mt-0 xl:p-0',
            'bg-surface-light dark:border-gray-700 dark:bg-surface-dark',
          )}>
          <div className='space-y-4 p-6 sm:px-10 sm:py-14 md:space-y-6'>
            {children}
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormRoot
