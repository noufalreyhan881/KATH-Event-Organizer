/**
 * UI Context - Global UI state (modals, sidebars, etc)
 */

'use client';

import React, { createContext, useContext, useState } from 'react';

interface UIContextType {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  isModalOpen: (modalId: string) => boolean;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

/**
 * UI Provider Component
 */
export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openModals, setOpenModals] = useState<Set<string>>(new Set());

  const value: UIContextType = {
    isSidebarOpen,
    setSidebarOpen: setIsSidebarOpen,
    isModalOpen: (modalId) => openModals.has(modalId),
    openModal: (modalId) => setOpenModals(prev => new Set([...prev, modalId])),
    closeModal: (modalId) => {
      const newModals = new Set(openModals);
      newModals.delete(modalId);
      setOpenModals(newModals);
    },
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

/**
 * Hook to use UI context
 */
export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUIContext must be used within UIProvider');
  }
  return context;
};

export default UIContext;
