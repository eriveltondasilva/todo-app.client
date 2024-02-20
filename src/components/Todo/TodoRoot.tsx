// ============================================================================
export default function TodoRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className='divide-y divide-gray-200 rounded-md bg-surface-light shadow-lg dark:divide-gray-700 dark:bg-surface-dark'>
      {children}
    </div>
  )
}
