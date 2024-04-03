import { t } from "i18next";
import * as yup from "yup";

import { confirmPassword, emailSchema, passwordSchema } from "./common";

export const signInValidationSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

export const signUpValidationSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: confirmPassword,
});

export const resetPasswordSchema = yup.object().shape({
  email: emailSchema,
});

export const verifyCodeSchema = yup.object().shape({
  code: yup
    .string()
    .min(6, `${t("CODE_TOO_SHORT")}`)
    .max(18, `${t("CODE_TOO_LONG")}`)
    .required(`${t("CODE_REQUIRED")}`),
});

export const changePasswordSchema = yup.object().shape({
  password: passwordSchema,
  confirmPassword: confirmPassword,
});
