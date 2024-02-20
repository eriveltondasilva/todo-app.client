import clsx from 'clsx'

// ============================================================================
type InputProps = {
  label?: string
  id: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Input({ label, id, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'mb-2 block text-sm font-medium',
            'text-gray-900 dark:text-white',
          )}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          'block w-full rounded-lg border sm:text-sm',
          'focus:ring-primary-600 focus:border-primary-600',
          'border-gray-300 bg-gray-50 p-2.5 text-gray-900',
          'dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
          'dark:focus:border-blue-500 dark:focus:ring-blue-500 ',
        )}
        {...props}
      />
    </div>
  )
}

export default Input
