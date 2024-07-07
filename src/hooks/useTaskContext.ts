import { useContext } from 'react'

import { TaskContext } from '@/contexts/taskContext'

export default function useTaskContext() {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error('useTasksContext must be used within a TaskProvider')
  }

  return context
}
