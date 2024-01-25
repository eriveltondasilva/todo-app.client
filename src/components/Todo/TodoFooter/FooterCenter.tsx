import { clsx } from 'clsx'

type FooterCenterProps = {
  center?: boolean
  status: string
  actions: {
    handleClickAllTasks: () => void
    handleClickCompletedTasks: () => void
    handleClickActiveTasks: () => void
  }
}

// ============================================================================
export default function FooterCenter({ center, status, actions }: FooterCenterProps) {
  const btn = [
    { title: 'All', onClick: actions.handleClickAllTasks },
    { title: 'Active', onClick: actions.handleClickActiveTasks },
    { title: 'Completed', onClick: actions.handleClickCompletedTasks },
  ]

  return (
    <div className={clsx('space-x-2', center ? 'mx-auto' : 'hidden justify-self-center sm:block')}>
      {btn.map(({ title, onClick }) => (
        <FooterButton key={title} title={title} status={status} onClick={onClick} />
      ))}
    </div>
  )
}

// ----------------------------------------------------------------------------
type FooterButtonProps = { title: string; status: string; onClick: () => void }
function FooterButton({ title, status, onClick }: FooterButtonProps) {
  return (
    <button
      className={clsx(
        status === title.toLowerCase()
          ? 'text-blue-400'
          : 'hover:text-gray-900 dark:hover:text-gray-100',
      )}
      onClick={onClick}>
      {title}
    </button>
  )
}
