'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import moonIcon from '@/assets/icons/icon-moon.svg'
import sunIcon from '@/assets/icons/icon-sun.svg'

// ============================================================================
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const btnText = (
    <Image
      className='hover:scale-110 active:scale-90'
      src={isOpen ? moonIcon : sunIcon}
      alt={`${isOpen ? 'moon' : 'sun'}icon`}
    />
  )

  const handleClick = () => setIsOpen(!isOpen)

  useEffect(() => {
    document.body.classList.toggle('dark')
  }, [isOpen])

  return (
    <header className='flex justify-between'>
      <h1 className='text-3xl font-semibold tracking-[0.5rem] text-white'>
        TODO
      </h1>
      <button onClick={handleClick}>{btnText}</button>
    </header>
  )
}
