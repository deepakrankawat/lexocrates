'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ProjectFile {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
  type: string;
}

export interface ProjectMessage {
  id: string;
  sender: 'user' | 'team';
  author: string;
  text: string;
  timestamp: string;
  avatar?: string;
}

export interface Matter {
  id: string;
  matterId: string; // ERPNext Matter ID e.g. MAT-2026-089
  title: string;
  serviceType: string;
  jurisdiction: string;
  practiceArea: string;
  deadline: string;
  description: string;
  status: 'In Review' | 'In Progress' | 'Waiting For Documents' | 'Completed' | 'Awaiting Approval';
  progress: number; // 0 - 100
  assignedTeam: { name: string; role: string; avatar: string }[];
  lexPackUsed?: string;
  hoursSpent?: number;
  files: ProjectFile[];
  messages: ProjectMessage[];
  createdAt: string;
}

export interface LexPackSubscription {
  tier: 'Bronze' | 'Silver' | 'Gold' | 'None';
  totalHours: number;
  remainingHours: number;
  priceMonthly: string;
  renewalDate: string;
  status: 'Active' | 'Paused' | 'None';
}

export interface UserProfile {
  name: string;
  email: string;
  company: string;
  country: string;
  role: string;
  isLoggedIn: boolean;
}

interface WorkspaceContextType {
  user: UserProfile;
  matters: Matter[];
  lexPack: LexPackSubscription;
  isAuthModalOpen: boolean;
  authModalInitialTab: 'signup' | 'signin';
  isNewProjectModalOpen: boolean;
  selectedServiceForNewProject: string | null;
  openAuthModal: (tab?: 'signup' | 'signin') => void;
  closeAuthModal: () => void;
  openNewProjectModal: (service?: string) => void;
  closeNewProjectModal: () => void;
  login: (data: { name?: string; email: string; company: string; country: string }) => void;
  logout: () => void;
  addMatter: (matterData: Omit<Matter, 'id' | 'matterId' | 'status' | 'progress' | 'assignedTeam' | 'files' | 'messages' | 'createdAt'>, files?: File[]) => Promise<Matter>;
  addMessageToMatter: (matterId: string, text: string) => void;
  addFileToMatter: (matterId: string, fileName: string, size: string) => void;
}

const DEFAULT_USER: UserProfile = {
  name: '',
  email: '',
  company: '',
  country: '',
  role: 'Client',
  isLoggedIn: false,
};

const DEFAULT_LEXPACK: LexPackSubscription = {
  tier: 'None',
  totalHours: 0,
  remainingHours: 0,
  priceMonthly: '£0',
  renewalDate: '-',
  status: 'None',
};

const INITIAL_MATTERS: Matter[] = [];

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile>(DEFAULT_USER);
  const [matters, setMatters] = useState<Matter[]>(INITIAL_MATTERS);
  const [lexPack, setLexPack] = useState<LexPackSubscription>(DEFAULT_LEXPACK);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [selectedServiceForNewProject, setSelectedServiceForNewProject] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('lexocrates_user');
      const savedMatters = localStorage.getItem('lexocrates_matters');
      if (savedUser) setUser(JSON.parse(savedUser));
      if (savedMatters) setMatters(JSON.parse(savedMatters));
    } catch (e) {
      console.error('Failed to load workspace state', e);
    }
  }, []);

  const [authModalInitialTab, setAuthModalInitialTab] = useState<'signup' | 'signin'>('signup');

  const openAuthModal = (tab: 'signup' | 'signin' = 'signup') => {
    setAuthModalInitialTab(tab);
    setIsAuthModalOpen(true);
  };
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const openNewProjectModal = (service?: string) => {
    if (service) setSelectedServiceForNewProject(service);
    setIsNewProjectModalOpen(true);
  };
  const closeNewProjectModal = () => {
    setIsNewProjectModalOpen(false);
    setSelectedServiceForNewProject(null);
  };

  const login = (data: { name?: string; email: string; company: string; country: string }) => {
    const updatedUser: UserProfile = {
      name: data.name || data.email.split('@')[0].replace('.', ' ').toUpperCase(),
      email: data.email,
      company: data.company || 'Corporate Client',
      country: data.country || 'Global',
      role: 'Client Director',
      isLoggedIn: true,
    };
    setUser(updatedUser);
    localStorage.setItem('lexocrates_user', JSON.stringify(updatedUser));
    closeAuthModal();
  };

  const logout = () => {
    const loggedOutUser: UserProfile = {
      name: '',
      email: '',
      company: '',
      country: '',
      role: '',
      isLoggedIn: false,
    };
    setUser(loggedOutUser);
    localStorage.removeItem('lexocrates_user');
  };

  const addMatter = async (
    matterData: Omit<Matter, 'id' | 'matterId' | 'status' | 'progress' | 'assignedTeam' | 'files' | 'messages' | 'createdAt'>,
    uploadedFiles?: File[]
  ): Promise<Matter> => {
    const matterId = `MAT-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newId = `mat-${Date.now()}`;

    const formattedFiles: ProjectFile[] = (uploadedFiles || []).map((file, idx) => ({
      id: `f-${Date.now()}-${idx}`,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadedAt: 'Just now',
      type: file.name.split('.').pop() || 'file',
    }));

    if (formattedFiles.length === 0) {
      formattedFiles.push({
        id: `f-${Date.now()}-default`,
        name: `${matterData.title.replace(/\s+/g, '_')}_Brief.pdf`,
        size: '1.2 MB',
        uploadedAt: 'Just now',
        type: 'pdf',
      });
    }

    const newMatter: Matter = {
      ...matterData,
      id: newId,
      matterId,
      status: 'In Review',
      progress: 15,
      assignedTeam: [
        { name: 'Sarah Jenkins', role: 'Senior Legal Lead', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
        { name: 'Michael Sterling', role: 'Legal Associate', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80' }
      ],
      lexPackUsed: lexPack.tier !== 'None' ? lexPack.tier : undefined,
      hoursSpent: 1,
      files: formattedFiles,
      messages: [
        {
          id: `msg-${Date.now()}`,
          sender: 'team',
          author: 'System Notification',
          text: `Matter ${matterId} has been successfully created. ERPNext Operations Layer has automatically provisioned your Matter Folder, assigned Legal Lead Sarah Jenkins, and dispatched internal notifications.`,
          timestamp: 'Just now',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
        }
      ],
      createdAt: new Date().toISOString(),
    };

    try {
      await fetch('/api/workspace/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client: user,
          matter: newMatter,
        }),
      });
    } catch (e) {
      console.warn('Backend API simulation fallback', e);
    }

    setMatters((prev) => {
      const updated = [newMatter, ...prev];
      localStorage.setItem('lexocrates_matters', JSON.stringify(updated));
      return updated;
    });

    if (lexPack.tier !== 'None') {
      setLexPack((prev) => ({
        ...prev,
        remainingHours: Math.max(0, prev.remainingHours - 2),
      }));
    }

    return newMatter;
  };

  const addMessageToMatter = (matterId: string, text: string) => {
    setMatters((prev) => {
      const updated = prev.map((m) => {
        if (m.id === matterId || m.matterId === matterId) {
          const newMsg: ProjectMessage = {
            id: `msg-${Date.now()}`,
            sender: 'user',
            author: user.name,
            text,
            timestamp: 'Just now',
          };
          return { ...m, messages: [...m.messages, newMsg] };
        }
        return m;
      });
      localStorage.setItem('lexocrates_matters', JSON.stringify(updated));
      return updated;
    });
  };

  const addFileToMatter = (matterId: string, fileName: string, size: string) => {
    setMatters((prev) => {
      const updated = prev.map((m) => {
        if (m.id === matterId || m.matterId === matterId) {
          const newFile: ProjectFile = {
            id: `f-${Date.now()}`,
            name: fileName,
            size,
            uploadedAt: 'Just now',
            type: fileName.split('.').pop() || 'file',
          };
          return { ...m, files: [newFile, ...m.files] };
        }
        return m;
      });
      localStorage.setItem('lexocrates_matters', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <WorkspaceContext.Provider
      value={{
        user,
        matters,
        lexPack,
        isAuthModalOpen,
        authModalInitialTab,
        isNewProjectModalOpen,
        selectedServiceForNewProject,
        openAuthModal,
        closeAuthModal,
        openNewProjectModal,
        closeNewProjectModal,
        login,
        logout,
        addMatter,
        addMessageToMatter,
        addFileToMatter,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    return {
      user: DEFAULT_USER,
      matters: INITIAL_MATTERS,
      lexPack: DEFAULT_LEXPACK,
      isAuthModalOpen: false,
      authModalInitialTab: 'signup' as const,
      isNewProjectModalOpen: false,
      selectedServiceForNewProject: null,
      openAuthModal: () => {},
      closeAuthModal: () => {},
      openNewProjectModal: () => {},
      closeNewProjectModal: () => {},
      login: () => {},
      logout: () => {},
      addMatter: async () => INITIAL_MATTERS[0],
      addMessageToMatter: () => {},
      addFileToMatter: () => {},
    };
  }
  return context;
}
