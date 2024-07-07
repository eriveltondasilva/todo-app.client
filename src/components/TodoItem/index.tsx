import type { Task } from '@/types/task'
import { TodoBtnClose, TodoInput, TodoLabel } from './TodoItem'

export function TodoItem({
  item,
  onUpdateClick,
  onDeleteClick,
}: {
  item: Task
  onUpdateClick: () => void
  onDeleteClick: () => void
}) {
  return (
    <li className='flex items-center justify-between px-5 py-3'>
      <div className='flex items-center'>
        <TodoInput item={item} onUpdateClick={onUpdateClick} />
        <TodoLabel item={item} />
      </div>
      <TodoBtnClose onDeleteClick={onDeleteClick} />
    </li>
  )
}
