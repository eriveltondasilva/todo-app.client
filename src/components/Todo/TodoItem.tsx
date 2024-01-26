import type { Task } from '@/types/task'

import TodoButtonClose from './TodoButtonClose'
import TodoInput from './TodoInput'
import TodoLabel from './TodoLabel'

// ============================================================================
type Props = { items: Task; onUpdateClick: () => void; onDeleteClick: () => void }
export default function TodoItem({ items, onUpdateClick, onDeleteClick }: Props) {
  return (
    <li className='flex items-center justify-between px-5 py-3'>
      <div className='flex items-center'>
        <TodoInput items={items} onUpdateClick={onUpdateClick} />
        <TodoLabel items={items} />
      </div>
      <TodoButtonClose onDeleteClick={onDeleteClick} />
    </li>
  )
}
