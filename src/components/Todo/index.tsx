'use client'
import { useState } from 'react'

import useTaskContext from '@/hooks/useTaskContext'

import { TodoFooter } from '@/components/TodoFooter'
import { TodoList } from '@/components/TodoList'
import TodoStatusFilter from './TodoStatusFilter'

import { TaskStatus } from '@/types/task'

// ============================================================================
export default function Todos() {
  const { tasks, isLoading, setTasks } = useTaskContext()
  const [taskFilter, setTaskFilter] = useState<TaskStatus>('all')

  async function handleUpdateTask(id: number) {}

  async function handleDeleteTask(id: number) {}

  // const filteredTasks = tasks?.filter((item) => {
  //   if (taskFilter === 'all') return true
  //   if (taskFilter === 'active') return !item.is_completed
  //   if (taskFilter === 'completed') return item.is_completed
  // })

  async function handleClickAllTasks() {
    setTaskFilter('all')
  }

  function handleClickActiveTasks() {
    setTaskFilter('active')
  }

  function handleClickCompletedTasks() {
    setTaskFilter('completed')
  }

  const handleActions = {
    handleClickAllTasks,
    handleClickActiveTasks,
    handleClickCompletedTasks,
  }

  if (isLoading || !tasks) return <div>Loading...</div>

  return (
    <>
      <TodoList items={tasks} />
      <TodoFooter status={taskFilter} actions={handleActions} />
      <TodoStatusFilter />
    </>
  )
}
