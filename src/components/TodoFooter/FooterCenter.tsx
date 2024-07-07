import { twJoin } from 'tailwind-merge'

type FooterCenterProps = {
  center?: boolean
  status: string
  onClick: () => void
}

// ============================================================================
export default function FooterCenter({
  center,
  status,
  onClick,
}: FooterCenterProps) {
  return (
    <div
      className={twJoin(
        'space-x-2',
        center ? 'mx-auto' : 'hidden justify-self-center sm:block',
      )}>
      <FooterButton
        title='All'
        status={status}
        onClick={() => onclick('all')}
      />
      <FooterButton
        title='Active'
        status={status}
        onClick={() => onclick('active')}
      />
      <FooterButton
        title='Completed'
        status={status}
        onClick={() => onclick('completed')}
      />
    </div>
  )
}

function FooterButton({
  title,
  status,
  onClick,
}: {
  title: string
  status: string
  onClick: () => void
}) {
  return (
    <button
      className={twJoin(
        status === title.toLowerCase()
          ? 'text-blue-400'
          : 'hover:text-gray-900 dark:hover:text-gray-100',
      )}
      onClick={onClick}>
      {title}
    </button>
  )
}
