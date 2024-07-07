'use client'
import { createContext, useEffect, useState } from 'react'

import { getTasks } from '@/services/tasks.service'
import type { Task, TaskContext as TaskContextType } from '@/types/task'

export const TaskContext = createContext<TaskContextType | null>(null)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true)
        const { data } = await getTasks()
        setTasks(data)
      } catch (error: Error | any) {
        console.error('Error fetching tasks:', error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, isLoading, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
