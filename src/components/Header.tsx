'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import moonIcon from '@/assets/icons/icon-moon.svg'
import sunIcon from '@/assets/icons/icon-sun.svg'

// ============================================================================
export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark')
  }, [isDarkMode])

  return (
    <header className='flex justify-between'>
      <h1 className='text-3xl font-semibold tracking-[0.5rem] text-white'>
        TODO
      </h1>
      <button onClick={toggleDarkMode}>
        <Image
          src={isDarkMode ? moonIcon : sunIcon}
          alt={isDarkMode ? 'moon icon' : 'sun icon'}
        />
      </button>
    </header>
  )
}
