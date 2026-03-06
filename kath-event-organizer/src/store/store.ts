/**
 * Zustand store examples for state management
 * Alternative to Context API for complex state
 */

import { create } from 'zustand';
import type { User } from '@/types/entity';

/**
 * Auth Store
 */
interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  login: (user, token) => set({ user, token, isAuthenticated: true }),
  logout: () => set({ user: null, token: null, isAuthenticated: false }),
}));

/**
 * UI Store
 */
interface UIStore {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  openModals: Set<string>;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openModals: new Set(),
  openModal: (modalId) =>
    set((state) => ({
      openModals: new Set([...state.openModals, modalId]),
    })),
  closeModal: (modalId) =>
    set((state) => {
      const newModals = new Set(state.openModals);
      newModals.delete(modalId);
      return { openModals: newModals };
    }),
}));
