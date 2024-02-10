type Props = {
  // onSubmit: (e: React.FormEvent<EventTarget>) => Promise<void>
  children: React.ReactNode
}

// ============================================================================
export default function FormRoot({ children }: Props) {
  return (
    <form>
      <span className='sr-only'>add a new todo</span>
      <div className='my-8 flex space-x-3 rounded-md bg-surface-light px-5 py-3 shadow-lg dark:bg-surface-dark'>
        {children}
      </div>
    </form>
  )
}
