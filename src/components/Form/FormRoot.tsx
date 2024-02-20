type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  children: React.ReactNode
}

// ============================================================================
export default function FormRoot({ onSubmit, children }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <div className='my-8 flex space-x-3 rounded-md bg-surface-light px-5 py-3 shadow-lg dark:bg-surface-dark'>
        {children}
      </div>
    </form>
  )
}
