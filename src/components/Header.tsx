'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import moonIcon from '@/assets/icons/icon-moon.svg'
import sunIcon from '@/assets/icons/icon-sun.svg'

// ============================================================================
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const btnText = isOpen ? (
    <Image src={moonIcon} alt='moon icon' />
  ) : (
    <Image src={sunIcon} alt='sun icon' />
  )

  useEffect(() => {
    document.body.classList.toggle('dark')
  }, [isOpen])

  return (
    <header className='flex justify-between'>
      <h1 className='text-3xl font-semibold tracking-[0.5rem] text-white'>TODO</h1>
      <button onClick={() => setIsOpen(!isOpen)}>{btnText}</button>
    </header>
  )
}
