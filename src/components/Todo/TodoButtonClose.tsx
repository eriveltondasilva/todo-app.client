import closeIcon from '@/assets/icons/icon-cross.svg'
import Image from 'next/image'

// ============================================================================
type Props = { onDeleteClick: () => void }
export default function TodoButtonClose({ onDeleteClick }: Props) {
  return (
    <button onClick={onDeleteClick}>
      <Image src={closeIcon} className='text-right hover:scale-125' alt='close icon' />
    </button>
  )
}
