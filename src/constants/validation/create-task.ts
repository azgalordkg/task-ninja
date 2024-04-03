import * as yup from "yup";

export const createTaskFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must be less than 30 characters long")
    .required("This field is required"),
});
