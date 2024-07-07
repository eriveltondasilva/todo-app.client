import { twJoin } from 'tailwind-merge'

// ============================================================================
type FooterRootProps = { children: React.ReactNode }
export function FooterRoot({ children }: FooterRootProps) {
  return (
    <footer
      className={twJoin(
        'flex w-full items-center justify-between',
        'px-5 py-3 text-gray-400',
      )}>
      {children}
    </footer>
  )
}

export function FooterRight({ onClick }: { onClick: () => void }) {
  return (
    <div className='justify-self-end'>
      <button
        onClick={onClick}
        className='border-none hover:text-gray-900 dark:hover:text-gray-100'>
        clear completed
      </button>
    </div>
  )
}

export function FooterLeft({ tasksNumber }: { tasksNumber: number }) {
  const text =
    tasksNumber > 1
      ? `${tasksNumber} items left`
      : tasksNumber === 1
        ? '1 item left'
        : 'No items left'

  return <div className=''>{text}</div>
}
