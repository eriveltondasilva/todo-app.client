import TodoFooter from './TodoFooter'
import { clsx } from 'clsx'

export default function TodoStatusFilter() {
  return (
    <div
      className={clsx(
        'mt-8 rounded-md py-1 shadow-lg sm:hidden',
        'bg-surface-light dark:divide-gray-700 dark:bg-surface-dark',
      )}>
      <TodoFooter footerType />
    </div>
  )
}