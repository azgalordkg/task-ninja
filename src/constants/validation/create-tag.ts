import * as yup from "yup";

export const createLabelFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(10, "Name must be less than 10 characters long")
    .required("This field is required"),
  color: yup.string().required(),
});
