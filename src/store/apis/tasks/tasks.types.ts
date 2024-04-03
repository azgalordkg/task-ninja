import { LabelItem, RecurringTypes } from "@/types";

export interface Task {
  id: number;
  name: string;
  description: string;
  hasDeadline: boolean;
  priority: number;
  repeat: RecurringTypes;
  startDate: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  labels: LabelItem[];
  isDone: boolean;
}

export interface AllTasksResponse {
  taskList: Task[];
  unscheduledTaskList: Task[];
  overdueTaskList: Task[];
}

export interface TaskCreateOrEdit {
  userData: Task;
  id?: number;
}

export interface TaskState {
  selectedDate: number;
}
