import { createContext } from 'react'
import type { AuthUser } from '@/features/auth/types/dto/AuthDTO'

export type AuthContextType = {
  isAuthenticated: boolean
  authUser: AuthUser | null
  setAuthUser: (user: AuthUser) => void
  clearAuthUser: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)
