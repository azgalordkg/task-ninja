import Realm from "realm";

export type RecurringTypes =
  | "Never"
  | "Daily"
  | "Weekly"
  | "Monthly"
  | "Yearly";

export interface TaskBase {
  name: string;
  description?: string;
  hasDeadline?: boolean;
  priority: number;
  repeat?: RecurringTypes;
}

export interface CreateTaskData extends TaskBase {
  startDate: Date | null;
  createdAt: Date;
  tags: number[];
}

export interface UpdateTaskData extends CreateTaskData {
  _id: string;
  isDone: boolean;
}

export interface TasksResponseItem extends TaskBase {
  _id: string;
  isDone: boolean;
  priority: number;
  startDate?: number;
  createdAt: number;
  tags: number[];
}

export interface TasksList {
  [key: string]: TasksResponseItem[];
}

export interface TaskSection {
  id: number;
  title: string;
  content: TasksResponseItem[];
}

export type CreateTaskKey = keyof CreateTaskData;

export type RealmTaskType = Realm.Results<Realm.Object> | any[];

export type Priority = {
  label: string;
  id: number;
  color: string;
  isLight?: boolean;
};
