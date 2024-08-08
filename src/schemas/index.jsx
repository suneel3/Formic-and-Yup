import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name cannot be more than 25 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(/^r.*M.*9$/, "Password must be start from r__M__9")
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
