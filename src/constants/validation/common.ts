import { t } from "i18next";
import * as yup from "yup";

export const emailSchema = yup
  .string()
  .email(`${t("INVALID_EMAIL")}`)
  .min(5, `${t("EMAIL_TOO_SHORT")}`)
  .max(254, `${t("EMAIL_TOO_LONG")}`)
  .required(`${t("EMAIL_REQUIRED")}`);

export const passwordSchema = yup
  .string()
  .min(6, `${t("PASSWORD_TOO_SHORT")}`)
  .max(18, `${t("PASSWORD_TOO_LONG")}`)
  .required(`${t("PASSWORD_REQUIRED")}`);

export const confirmPassword = yup
  .string()
  .oneOf([yup.ref("password")], `${t("PASSWORDS_MUST_MATCH")}`)
  .required(`${t("CONFIRM_PASSWORD_REQUIRED")}`);
