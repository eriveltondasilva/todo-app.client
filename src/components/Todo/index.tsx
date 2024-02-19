'use client'
import { useEffect, useState } from 'react'

import useTaskContext from '@/hooks/useTaskContext'
import { deleteTask, updateTask } from '@/services/taskApi'

import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import TodoRoot from './TodoRoot'
import TodoStatusFilter from './TodoStatusFilter'

import { todos } from '@/data'

// ============================================================================
export default function Todos() {
  const { tasks, setTasks } = useTaskContext()
  const [taskFilter, setTaskFilter] = useState<'all' | 'active' | 'completed'>('all')

  useEffect(() => {
    setTasks(todos)
  }, [setTasks])

  useEffect(() => {
    async function getAllTasks() {
      const res = await getAllTasks()
      setTasks(res?.data)
    }

    getAllTasks()
  }, [setTasks])

  // ==================================
  async function handleUpdateTask(id: number) {
    const body = { is_completed: !tasks?.find((item) => item.id === id)?.is_completed }
    const task = await updateTask(id, body)
    if (task?.status !== 200) return
    setTasks((prevState) => prevState?.map((item) => (item.id === id ? task?.data : item))!)
  }

  async function handleDeleteTask(id: number) {
    const task = await deleteTask(id)
    if (task?.status !== 204) return
    setTasks((prevState) => prevState?.filter((item) => item.id !== id)!)
  }

  // ==================================
  const filteredTasks = tasks?.filter((item) => {
    if (taskFilter === 'all') return true
    if (taskFilter === 'active') return !item.is_completed
    if (taskFilter === 'completed') return item.is_completed
  })

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

  return (
    <>
      <TodoRoot>
        <TodoList>
          {filteredTasks?.map((item) => (
            <TodoItem
              key={item.id}
              items={item}
              onUpdateClick={() => handleUpdateTask(item.id)}
              onDeleteClick={() => handleDeleteTask(item.id)}
            />
          ))}
        </TodoList>
        <TodoFooter status={taskFilter} actions={handleActions} />
      </TodoRoot>
      {/*  */}
      <TodoStatusFilter />
    </>
  )
}
