import * as Yup from "yup";

/**
 * Bootstrap an object schema
 * @param {*} obj
 * @public
 */
export const objSchema = (obj) => Yup.object().shape(obj);

/**
 * Validation schemas
 */
const schemas = {
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),

  name: Yup.string()
    .trim()
    .matches(/^$|^[A-Za-z\s]+$/, "No special characters allowed")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Name is required"),

  commentBody: Yup.string()
    .trim()
    .min(15, "Minimum 15 characters")
    .max(4096, "Max 4096 characters")
    .required("Please leave a message"),
};

export default schemas;
