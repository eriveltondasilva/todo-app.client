export type Task = {
  id: number
  title: string
  is_completed?: boolean
  created_at?: string
  updated_at?: string
  user_id?: number
}

export type TaskContext = {
  tasks: Task[] | null
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
}
