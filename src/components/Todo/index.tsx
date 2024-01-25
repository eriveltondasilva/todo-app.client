'use client'
import { useEffect } from 'react'

import useTaskContext from '@/hooks/useTaskContext'
import * as api from '@/services/taskApi'

import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import TodoRoot from './TodoRoot'
import TodoStatusFilter from './TodoStatusFilter'

// ============================================================================
export default function Todos() {
  const { tasks, setTasks } = useTaskContext()

  useEffect(() => {
    async function getAllTasks() {
      const res = await api.getAllTasks()
      setTasks(res.data)
    }

    getAllTasks()
  }, [setTasks])

  // ----------------------------------
  async function handleUpdateTask(id: number) {
    const body = { is_completed: !tasks?.find((item) => item.id === id)?.is_completed }
    const task = await api.updateTask(id, body)

    if (task?.status !== 200) return

    setTasks((prevState) => prevState?.map((item) => (item.id === id ? task?.data : item))!)
  }

  async function handleDeleteTask(id: number) {
    const task = await api.deleteTask(id)

    if (task?.status !== 204) return

    setTasks((prevState) => prevState?.filter((item) => item.id !== id)!)
  }

  return (
    <>
      <TodoRoot>
        <TodoList>
          {tasks?.map((item) => (
            <TodoItem
              key={item.id}
              items={item}
              onUpdateClick={() => handleUpdateTask(item.id)}
              onDeleteClick={() => handleDeleteTask(item.id)}
            />
          ))}
        </TodoList>
        <TodoFooter />
      </TodoRoot>
      {/*  */}
      <TodoStatusFilter />
    </>
  )
}