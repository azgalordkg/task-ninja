import { t } from "i18next";
import * as yup from "yup";

import {
  confirmPassword,
  emailSchema,
  passwordSchema,
} from "@/constants/validation/common";

export const changeNameSchema = yup.object().shape({
  fullname: yup.string().required(`${t("CODE_REQUIRED")}`),
});

export const changeEmailSchema = yup.object().shape({
  email: emailSchema,
});

export const setAccountPasswordSchema = yup.object().shape({
  oldPassword: passwordSchema,
  password: passwordSchema,
  confirmPassword: confirmPassword,
});

export const setPasswordSchema = yup.object().shape({
  password: passwordSchema,
  confirmPassword: confirmPassword,
});
