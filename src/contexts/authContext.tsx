import type { User } from '@/types/user'
import { createContext, useEffect, useState } from 'react'

type AuthContextType = {
  auth: User | null
  signIn: (userData: User) => void
  signOut: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

// ============================================================================
export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)

  const signIn = (userData: User) => {
    setUser(userData)
  }

  const signOut = () => {
    setUser(null)
  }

  useEffect(() => {}, [])

  return (
    <AuthContext.Provider value={{ auth: user, signIn, signOut }}>{children}</AuthContext.Provider>
  )
}
