/**
 * Auth Context - Global authentication state
 * Use this for managing auth state across the app
 */

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '@/types/entity';
import type { AuthState } from '@/features/auth';

interface AuthContextType extends AuthState {
  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuth: boolean) => void;
  setError: (error: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Auth Provider Component
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    error: null,
  });

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('current_user');
        const token = localStorage.getItem('auth_token');

        if (storedUser && token) {
          setAuthState({
            isAuthenticated: true,
            user: JSON.parse(storedUser),
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    checkAuth();
  }, []);

  const value: AuthContextType = {
    ...authState,
    setUser: (user) => setAuthState(prev => ({ ...prev, user })),
    setIsAuthenticated: (isAuth) => setAuthState(prev => ({ ...prev, isAuthenticated: isAuth })),
    setError: (error) => setAuthState(prev => ({ ...prev, error })),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Hook to use auth context
 */
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};

export default AuthContext;
