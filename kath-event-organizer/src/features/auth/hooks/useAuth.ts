/**
 * Auth hooks - integrated with AuthContext
 */

'use client';

import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import { authService } from '../services';
import { storage } from '@/lib/storage';
import type { LoginRequest, RegisterRequest } from '../types';

/**
 * Hook for login functionality
 */
export const useLogin = () => {
  const { setUser, setIsAuthenticated, setError } = useContext(AuthContext)!;

  const login = async (credentials: LoginRequest) => {
    setError(null);
    try {
      const result = await authService.login(credentials);

      // Save to localStorage
      storage.set('auth_token', result.accessToken);
      storage.set('current_user', JSON.stringify(result.user));

      // Update context
      setUser(result.user);
      setIsAuthenticated(true);

      return result;
    } catch (err: any) {
      const errorMessage = err.message || 'Login failed';
      setError(errorMessage);
      throw err;
    }
  };

  return { login };
};

/**
 * Hook for register functionality
 */
export const useRegister = () => {
  const { setUser, setIsAuthenticated, setError } = useContext(AuthContext)!;

  const register = async (data: RegisterRequest) => {
    setError(null);
    try {
      const result = await authService.register(data);

      // Auto-login after registration
      storage.set('auth_token', result.accessToken);
      storage.set('current_user', JSON.stringify(result.user));

      setUser(result.user);
      setIsAuthenticated(true);

      return result;
    } catch (err: any) {
      const errorMessage = err.message || 'Registration failed';
      setError(errorMessage);
      throw err;
    }
  };

  return { register };
};

/**
 * Hook for logout functionality
 */
export const useLogout = () => {
  const { setUser, setIsAuthenticated } = useContext(AuthContext)!;

  const logout = async () => {
    try {
      await authService.logout();

      // Clear localStorage
      storage.remove('auth_token');
      storage.remove('current_user');

      // Clear context
      setUser(null);
      setIsAuthenticated(false);
    } catch (err) {
      // Even if logout fails, clear local state
      storage.remove('auth_token');
      storage.remove('current_user');
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return { logout };
};

/**
 * Hook to access auth state
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
