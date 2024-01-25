'use client'
import type { Task } from '@/types/task'
import { createContext, useState } from 'react'

type TaskContext = {
  tasks: Task[] | null
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
}

export const TaskContext = createContext<TaskContext | null>(null)

// ============================================================================
type Props = { children: React.ReactNode }
export function TaskProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Task[] | null>(null)

  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>
}