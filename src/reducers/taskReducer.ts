import type { Task, TaskStatus } from '@/types/task'

export function taskReducer(state: Task[], action: TaskStatus) {
  switch (action) {
    case 'active':
      return state?.filter((task) => task.completed === false)
    case 'completed':
      return state?.filter((task) => task.completed === true)
    case 'all':
      return state
    //
    default:
      return new Error('No matching action type')
  }
}

// const filteredTasks = tasks?.filter((item) => {
//     if (taskFilter === 'all') return true
//     if (taskFilter === 'active') return !item.completed
//     if (taskFilter === 'completed') return item.completed
//   })
