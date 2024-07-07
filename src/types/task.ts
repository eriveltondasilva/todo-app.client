export type Task = {
  id: number
  title: string
  is_completed?: boolean
  completed?: boolean // TODO: remove it
  created_at?: string
  updated_at?: string
  user_id?: number
}

export type TaskContext = {
  tasks: Task[] | null
  isLoading: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
}

export type TaskStatus = 'all' | 'active' | 'completed'
