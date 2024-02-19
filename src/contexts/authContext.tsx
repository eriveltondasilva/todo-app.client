'use client'
import type { User } from '@/types/user'
import { createContext, useState } from 'react'

type AuthContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const AuthContext = createContext<AuthContextType | null>(null)

// ============================================================================
export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)

  // useEffect(() => {}, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
