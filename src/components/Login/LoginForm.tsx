type Props = {
  onSubmit: (e: React.FormEvent<EventTarget>) => void
  children: React.ReactNode
}

export default function name({ onSubmit, children }: Props) {
  return (
    <form onSubmit={onSubmit} className='space-y-4 md:space-y-6'>
      {children}
    </form>
  )
}
