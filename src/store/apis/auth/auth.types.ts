import { UserInfo } from "@/types";

export interface AuthResponse {
  token: string;
}

export interface AuthState {
  user: UserInfo | null;
}

export interface PasswordBase {
  password: string;
}

export interface PasswordChange extends PasswordBase {
  oldPassword: string;
}
