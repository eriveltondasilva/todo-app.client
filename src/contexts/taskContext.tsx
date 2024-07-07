'use client'
import { createContext, useState } from 'react'

import type { Task, TaskContext as TaskContextType } from '@/types/task'

export const TaskContext = createContext<TaskContextType | null>(null)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[] | null>(null)

  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>
}
