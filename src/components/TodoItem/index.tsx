import type { Task } from '@/types/task'
import { TodoBtnClose, TodoInput, TodoLabel } from './TodoItem'

type TodoItemProps = {
  items: Task
  onUpdateClick: () => void
  onDeleteClick: () => void
}

export function TodoItem({ items, onUpdateClick, onDeleteClick }: TodoItemProps) {
  return (
    <li className='flex items-center justify-between px-5 py-3'>
      <div className='flex items-center'>
        <TodoInput items={items} onUpdateClick={onUpdateClick} />
        <TodoLabel items={items} />
      </div>
      <TodoBtnClose onDeleteClick={onDeleteClick} />
    </li>
  )
}
