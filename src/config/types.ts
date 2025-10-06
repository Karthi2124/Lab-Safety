export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  lab: 'chemistry' | 'physics' | 'computer';
  group?: string;
}

export interface Experiment {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  materials: string[];
  safetyPrecautions: string[];
}

export interface AssignedExperiment {
  id: string;
  studentId: string;
  experimentId: string;
  assignedDate: string;
  dueDate: string;
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Submitted';
  submissionDate?: string;
  notes?: string;
  grade?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'urgent' | 'success';
  timestamp: string;
  read: boolean;
  labType: 'chemistry' | 'physics' | 'computer';
}

export interface LabData {
  id: string;
  name: string;
  icon: string;
  color: string;
  totalStudents: number;
  activeExperiments: number;
  completionRate: number;
}

export interface AnalyticsData {
  labUsage: { week: string; chemistry: number; physics: number; computer: number }[];
  experimentStatus: { status: string; count: number }[];
  studentPerformance: { student: string; completed: number; total: number }[];
}

// Navigation Types
export type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Main: undefined;
  StudentActivity: { studentId: string; labType: string };
};

export type MainTabParamList = {
  Dashboard: undefined;
  Analytics: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type LabStackParamList = {
  LabMain: undefined;
  ChemistryLab: undefined;
  PhysicsLab: undefined;
  ComputerLab: undefined;
  StudentActivity: { studentId: string; labType: string };
};