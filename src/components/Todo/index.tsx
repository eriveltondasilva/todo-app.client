'use client'
import { useReducer, useState } from 'react'

import useTaskContext from '@/hooks/useTaskContext'

import { TodoFooter } from '@/components/TodoFooter'
import { TodoList } from '@/components/TodoList'
import TodoStatusFilter from './TodoStatusFilter'
import { taskReducer } from '@/reducers/taskReducer'

import { TaskStatus } from '@/types/task'

// ============================================================================
export default function Todos() {
  const { tasks, isLoading, setTasks } = useTaskContext()
  const [taskFilter, setTaskFilter] = useState<TaskStatus>('all')
  const [stateTaskFiltered, dispatchTaskFiltered] = useReducer(
    taskReducer,
    tasks,
  )

  // const filteredTasks = tasks?.filter((item) => {
  //   if (taskFilter === 'all') return true
  //   if (taskFilter === 'active') return !item.completed
  //   if (taskFilter === 'completed') return item.completed
  // })

  // async function handleClickAllTasks() {
  //   setTaskFilter('all')
  // }

  // function handleClickActiveTasks() {
  //   setTaskFilter('active')
  // }

  // function handleClickCompletedTasks() {
  //   setTaskFilter('completed')
  // }

  async function handleUpdateTask(id: number) {}

  async function handleDeleteTask(id: number) {}

  if (isLoading || !tasks) return <div>Loading...</div>

  return (
    <>
      <TodoList items={tasks} />
      <TodoFooter status={taskFilter} onClick={dispatchTaskFiltered} />
      <TodoStatusFilter />
    </>
  )
}
