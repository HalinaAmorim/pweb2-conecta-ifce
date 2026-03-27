import {
  clearStoredUser,
  getStoredUser,
  setStoredUser,
} from '@/features/auth/storages/authUser.storage'
import type { AuthUser } from '@/features/auth/types/dto/AuthDTO'
import { useState, type ReactNode } from 'react'
import { AuthContext } from '@/features/auth/contexts/auth-context'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(() =>
    getStoredUser(),
  )

  function setUser(user: AuthUser) {
    setStoredUser(user)
    setAuthUser(user)
  }

  function clearUser() {
    clearStoredUser()
    setAuthUser(null)
  }

  return (
    <AuthContext
      value={{
        isAuthenticated: authUser !== null,
        authUser,
        setAuthUser: setUser,
        clearAuthUser: clearUser,
      }}
    >
      {children}
    </AuthContext>
  )
}
