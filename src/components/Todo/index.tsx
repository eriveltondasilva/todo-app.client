'use client'
import { useState } from 'react'

import useTaskContext from '@/hooks/useTaskContext'

import { TodoFooter } from '@/components/TodoFooter'
import { TodoList } from '@/components/TodoList'
import TodoStatusFilter from './TodoStatusFilter'

import { TaskStatus } from '@/types/task'

export default function Todos() {
  const { tasks, isLoading, setTasks } = useTaskContext()
  const [taskFilter, setTaskFilter] = useState<TaskStatus>('all')

  const filteredTasks = tasks?.filter((item) => {
    if (taskFilter === 'active') {
      return !item.completed
    }
    if (taskFilter === 'completed') {
      return item.completed
    }

    return true
  })

  async function handleUpdateTask(id: number) {}

  async function handleDeleteTask(id: number) {}

  if (isLoading || !tasks) return <div>Loading...</div>

  return (
    <>
      <TodoList items={filteredTasks || []} />
      <TodoFooter status={taskFilter} onClick={setTaskFilter} />
      <TodoStatusFilter />
    </>
  )
}
