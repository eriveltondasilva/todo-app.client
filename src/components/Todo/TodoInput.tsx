import { clsx } from 'clsx'
import Image from 'next/image'

import checkIcon from '@/assets/icons/icon-check.svg'
import { Task } from '@/types/task'

// ============================================================================
type Props = { items: Task; onUpdateClick: () => void }
export default function TodoInput({ items, onUpdateClick }: Props) {
  const { id, is_completed } = items

  return (
    <div className='mr-3 inline-flex items-center'>
      <label className='relative flex cursor-pointer items-center rounded-full' htmlFor='todo'>
        <input
          id={id.toString()}
          defaultChecked={is_completed}
          onClick={onUpdateClick}
          type='checkbox'
          className={clsx(
            "before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none border",
            'before:absolute before:left-2/4 before:top-2/4 before:block',
            'before:h-12 before:w-12',
            'before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0',
            'rounded-full before:rounded-full',
            'hover:scale-105 hover:before:opacity-0',
            'transition-all before:transition-opacity',
            'checked:bg-gradient-to-r',
            'from-gradient-left to-gradient-right',
          )}
        />
        <span
          className={clsx(
            'pointer-events-none absolute',
            'left-2/4 top-2/4',
            '-translate-x-2/4 -translate-y-2/4',
            'text-white',
            'opacity-0 transition-opacity peer-checked:opacity-100',
          )}>
          <Image src={checkIcon} alt='check icon' />
        </span>
      </label>
    </div>
  )
}
