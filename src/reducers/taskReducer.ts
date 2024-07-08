import type { Task } from '@/types/task'

export function taskReducer(state: Task[], action: any) {
  switch (action) {
    case 'active':
      console.log('active')
      return state?.filter((task) => task.completed === false) // TODO: remove
    case 'completed':
      console.log('completed')
      return state?.filter((task) => task.completed === true) // TODO: remove
    case 'all':
      console.log('all')
      return state
    //
    default:
      return new Error('No matching action type')
  }
}
