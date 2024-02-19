import { AuthContext } from '@/contexts/authContext'
import { useContext } from 'react'

// ============================================================================
export default function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
