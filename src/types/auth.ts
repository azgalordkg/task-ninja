export interface AuthBase {
  fullname?: string;
  email: string;
}

export interface AuthData extends AuthBase {
  password: string;
}

export interface AuthFormValues extends AuthData {
  confirmPassword?: string;
  oldPassword?: string;
}

export type AuthFormValuesKey = keyof AuthFormValues;

export interface ResetPasswordFormValues extends Partial<AuthData> {
  code?: string;
  confirmPassword?: string;
}

export type ResetPasswordFormValuesKey = keyof ResetPasswordFormValues;

export interface Role {
  id: number;
  value: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserInfo {
  id: number;
  email: string;
  fullname: string;
  createdAt: string;
  updatedAt: string;
  isGoogle: boolean | null;
  roles: Role[];
  withPassword: boolean;
  tasks: any[]; // TODO Implement Task type
}

export interface ServerError {
  status: number;
  data: {
    statusCode?: number;
    message: string;
  };
}
