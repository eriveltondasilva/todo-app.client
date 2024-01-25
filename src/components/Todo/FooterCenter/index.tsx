import { useState } from 'react'

import type { Task } from '@/types/task'
import useTaskContext from '@/hooks/useTaskContext'
import * as api from '@/services/taskApi'

import FooterCenter from './FooterCenter'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import FooterRoot from './FooterRoot'

// ==============================================================================
type Props = { footerType?: boolean }
export default function TodoFooter({ footerType }: Props) {
  const { tasks, setTasks } = useTaskContext()
  const [tempTasks, setTempTasks] = useState<Task[] | null>([])
  const [btnFooterStatus, setBtnFooterStatus] = useState<'all' | 'active' | 'completed'>('all')

  const tasksLeft = tasks?.filter((item) => !item.is_completed).length || 0

  // ----------------------------------
  async function handleClearCompleted() {
    if (!tasks?.length) return

    const completedTasksIds = tasks?.filter((item) => item.is_completed).map((item) => item.id)

    if (!completedTasksIds?.length) return

    const res = await api.deleteTasks(completedTasksIds)

    if (res?.status !== 204) return

    setTasks((prevState) => prevState?.filter((item) => !completedTasksIds?.includes(item.id))!)
  }

  // ----------------------------------
  function filterTasks(filterFunction: (item: Task) => void) {
    if (tempTasks?.length !== 0) {
      setTasks(tempTasks)
      setTempTasks([])
    }

    setTempTasks(tasks)
    setTasks((prev) => prev?.filter(filterFunction) || [])
  }

  // ----------------------------------
  async function handleClickAllTasks() {
    const res = await api.getAllTasks()
    setTasks(res.data)
    setTempTasks([])
    setBtnFooterStatus('all')
  }

  function handleClickActiveTasks() {
    filterTasks((item) => !item.is_completed)
    setBtnFooterStatus('active')
  }

  function handleClickCompletedTasks() {
    filterTasks((item) => item.is_completed)
    setBtnFooterStatus('completed')
  }

  const handleActions = {
    handleClickAllTasks,
    handleClickActiveTasks,
    handleClickCompletedTasks,
  }

  if (footerType) {
    return (
      <FooterRoot>
        <FooterCenter center status={btnFooterStatus} actions={handleActions} />
      </FooterRoot>
    )
  }

  // ==>
  return (
    <FooterRoot>
      <FooterLeft tasksNumber={tasksLeft} />
      <FooterCenter status={btnFooterStatus} actions={handleActions} />
      <FooterRight onClick={handleClearCompleted} />
    </FooterRoot>
  )
}
