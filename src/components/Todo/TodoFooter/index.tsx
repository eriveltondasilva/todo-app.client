import useTaskContext from '@/hooks/useTaskContext'
import * as api from '@/services/taskApi'

import FooterCenter from './FooterCenter'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import FooterRoot from './FooterRoot'

type Props = {
  footerType?: boolean
  status: string
  actions: any
}

// ==============================================================================
export default function TodoFooter({ footerType, status, actions }: Props) {
  const { tasks, setTasks } = useTaskContext()

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

  if (footerType) {
    return (
      <FooterRoot>
        <FooterCenter center status={status} actions={actions} />
      </FooterRoot>
    )
  }

  // ==>
  return (
    <FooterRoot>
      <FooterLeft tasksNumber={tasksLeft} />
      <FooterCenter status={status} actions={actions} />
      <FooterRight onClick={handleClearCompleted} />
    </FooterRoot>
  )
}
