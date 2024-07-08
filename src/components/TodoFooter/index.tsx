import useTaskContext from '@/hooks/useTaskContext'

import FooterCenter from './FooterCenter'
import { FooterLeft, FooterRight, FooterRoot } from './TodoFooter'

type Props = {
  footerType?: boolean
  status: string
  onClick: any
}

// ==============================================================================
export function TodoFooter({ footerType, status, onClick }: Props) {
  const { tasks, setTasks } = useTaskContext()

  const tasksLeft = tasks?.filter((item) => !item.is_completed).length || 0

  // ----------------------------------
  async function handleClearCompleted() {
    // if (!tasks?.length) return
    // const completedTasksIds = tasks
    //   ?.filter((item) => item.is_completed)
    //   .map((item) => item.id)
    // if (!completedTasksIds?.length) return
    // setTasks(
    //   (prevState) =>
    //     prevState?.filter((item) => !completedTasksIds?.includes(item.id))!,
    // )
  }
  // ----------------------------------

  if (footerType) {
    return (
      <FooterRoot>
        <FooterCenter center status={status} onClick={onClick} />
      </FooterRoot>
    )
  }

  return (
    <FooterRoot>
      <FooterLeft tasksNumber={tasksLeft} />
      <FooterCenter status={status} onClick={onClick} />
      <FooterRight onClick={handleClearCompleted} />
    </FooterRoot>
  )
}
