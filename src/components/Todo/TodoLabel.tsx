import type { Task } from '@/types/task'
import clsx from 'clsx'

// ============================================================================
export default function TodoLabel({ items }: { items: Task }) {
  const { id, title, is_completed } = items

  return (
    <label
      htmlFor={String(id)}
      className={clsx(
        'text-md cursor-pointer font-normal',
        is_completed && 'text-gray-400 line-through',
      )}>
      {title}
    </label>
  )
}
