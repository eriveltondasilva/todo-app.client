type Props = { onClick: () => void }
export default function FooterRight({ onClick }: Props) {
  return (
    <div className='justify-self-end'>
      <button
        onClick={onClick}
        className='border-none hover:text-gray-900 dark:hover:text-gray-100'>
        clear completed
      </button>
    </div>
  )
}
