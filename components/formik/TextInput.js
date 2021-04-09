/* eslint-disable react/prop-types */
import { useField } from "formik";

// Defaults to input of type 'text'
const TextInput = ({
  label,
  type = "text",
  edit = false,
  className,
  ...props
}) => {
  /* 
    useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    which we can spread on <input>. We can use field meta to show an error
    message if the field is invalid and it has been touched (i.e. visited)
  */

  const [field, meta] = useField(props);
  const showErr = meta.touched && meta.error ? true : false;

  const randomNum = Math.random() * 100;

  return (
    <div className="form__group">
      <label className="form__label" htmlFor={props.id || props.name}>
        {label}
      </label>

      <input
        className={`form__input${edit ? "--edit" : ""} border ${
          showErr ? " border--danger shadow--none " : ""
        } ${className ? className : ""}`}
        type={type}
        title={edit ? "Click to edit" : ""}
        data-pwd-id={type === "password" && randomNum.toString()}
        id={props.id ? props.id : props.name}
        {...field}
        {...props}
      />

      {showErr ? <div className="text--danger">{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
