type Props = { children: React.ReactNode }
export default function TodoRoot({ children }: Props) {
  return (
    <div className='divide-y divide-gray-200 rounded-md bg-surface-light shadow-lg dark:divide-gray-700 dark:bg-surface-dark'>
      {children}
    </div>
  )
}
