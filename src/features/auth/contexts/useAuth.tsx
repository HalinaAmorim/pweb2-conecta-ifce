import { useContext } from 'react'
import {
  AuthContext,
  type AuthContextType,
} from '@/features/auth/contexts/auth-context'

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'O contexto de autenticação não pode ser acessado fora do AuthProvider',
    )
  }
  return context
}
