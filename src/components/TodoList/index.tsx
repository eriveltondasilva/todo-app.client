import { TodoItem } from '@/components/TodoItem'
import { Task } from '@/types/task'
import { TodoListRoot } from './TodoList'

export function TodoList({ items }: { items: Task[] }) {
  return (
    <TodoListRoot>
      {items?.map((item) => <TodoItem key={item.id} item={item} />)}
    </TodoListRoot>
  )
}
