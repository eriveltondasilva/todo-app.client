import Image from 'next/image'
import { twJoin } from 'tailwind-merge'

import type { Task } from '@/types/task'

import checkIcon from '@/assets/icons/icon-check.svg'
import closeIcon from '@/assets/icons/icon-cross.svg'

export function TodoInput({
  item,
  onUpdateClick,
}: {
  item: Task
  onUpdateClick: () => void
}) {
  const id = item.id.toString()

  return (
    <div className='mr-3 inline-flex items-center'>
      <label
        className='relative flex cursor-pointer items-center rounded-full'
        htmlFor={id}>
        <input
          id={id}
          defaultChecked={item.completed} // TODO: change to item.is_completed
          onClick={onUpdateClick}
          type='checkbox'
          className={twJoin(
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
          className={twJoin(
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

export function TodoLabel({ item }: { item: Task }) {
  return (
    <label
      htmlFor={item.id.toString()}
      className={twJoin(
        'text-md cursor-pointer font-normal',
        item.completed && 'text-gray-400 line-through', // TODO: change to item.is_completed
      )}>
      {item.title}
    </label>
  )
}

export function TodoBtnClose({ onDeleteClick }: { onDeleteClick: () => void }) {
  return (
    <button onClick={onDeleteClick}>
      <Image
        className='text-right hover:scale-110'
        alt='close icon'
        src={closeIcon}
      />
    </button>
  )
}
