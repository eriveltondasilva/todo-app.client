import clsx from 'clsx'

type Props = { children: string }

// ============================================================================
function FormTitle({ children }: Props) {
  return (
    <h1
      className={clsx(
        'text-center text-xl font-bold leading-tight tracking-tight md:text-2xl',
        'text-gray-900 dark:text-white',
      )}>
      {children}
    </h1>
  )
}

export default FormTitle
