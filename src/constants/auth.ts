import {
  changePasswordSchema,
  resetPasswordSchema,
  verifyCodeSchema,
} from "@/constants/validation";

export const TOKEN = "token";
// export const BASE_URL = "https://task-ninja-back.herokuapp.com";
export const BASE_URL = "http://localhost:8008";

export const URL_ROUTES = {
  AUTH: "/auth",
  LABELS: "/labels",
  TASKS: "/tasks",
};

export const AUTH_TYPE = [
  { title: "SIGN_IN", value: "signIn" },
  { title: "SIGN_UP", value: "signUp" },
];

export const resetTitleText = [
  "FORGOT_PASSWORD_TITLE",
  "VERIFY_CODE_TITLE",
  "RESET_PASSWORD_TITLE",
];

export const resetPasswordDescription = [
  "FORGOT_PASSWORD_DESCRIPTION",
  "VERIFY_CODE_DESCRIPTION",
  "CHANGE_PASSWORD_DESCRIPTION",
];

export const resetPasswordButtonText = [
  "SEND_CODE",
  "VERIFY_CODE",
  "RESET_PASSWORD",
];

export const resetPasswordValidationSchemas = [
  resetPasswordSchema,
  verifyCodeSchema,
  changePasswordSchema,
];
