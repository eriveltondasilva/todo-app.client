import clsx from 'clsx'

// ============================================================================
type InputProps = {
  label?: string
  id: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div>
      {label && <Label label={label} id={id} />}
      <input
        id={id}
        className={clsx(
          'block w-full rounded-lg border sm:text-sm',
          'focus:ring-primary-600 focus:border-primary-600',
          'border-gray-300 bg-gray-50 p-2.5 text-gray-900',
          'dark:border-gray-600',
          'dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
          'dark:focus:border-blue-500 dark:focus:ring-blue-500 ',
        )}
        {...props}
      />
    </div>
  )
}

// -----------------------------------------------------------------------------
function Label({ label, id }: InputProps) {
  return (
    <label
      htmlFor={id}
      className={clsx(
        'mb-2 block text-sm font-medium',
        'text-gray-900 dark:text-white',
      )}>
      {label}
    </label>
  )
}
