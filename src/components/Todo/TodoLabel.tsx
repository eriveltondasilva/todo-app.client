import type { Task } from '@/types/task'
import { twJoin } from 'tailwind-merge'

// ============================================================================
type Props = { items: Task }
export default function TodoLabel({ items }: Props) {
  const { id, title, is_completed } = items

  return (
    <label
      htmlFor={id.toString()}
      className={twJoin(
        'text-md cursor-pointer font-normal',
        is_completed && 'text-gray-400 line-through',
      )}>
      {title}
    </label>
  )
}
