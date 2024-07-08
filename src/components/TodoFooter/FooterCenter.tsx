import { twJoin } from 'tailwind-merge'

export default function FooterCenter({
  center,
  status,
  onClick,
}: {
  center?: boolean
  status: string
  onClick: any
}) {
  return (
    <div
      className={twJoin(
        'space-x-2',
        center ? 'mx-auto' : 'hidden justify-self-center sm:block',
      )}>
      <button
        className='hover:text-gray-900 dark:hover:text-gray-100'
        onClick={() => onClick('all')}>
        All
      </button>

      <button
        className='hover:text-gray-900 dark:hover:text-gray-100'
        onClick={() => onClick('active')}>
        Active
      </button>

      <button
        className='hover:text-gray-900 dark:hover:text-gray-100'
        onClick={() => onClick('completed')}>
        Completed
      </button>
    </div>
  )
}
