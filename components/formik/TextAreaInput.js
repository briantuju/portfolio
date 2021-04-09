/* eslint-disable react/prop-types */
import { useField } from "formik";

// Custom textarea input element
const TextAreaInput = ({ label, edit = false, ...props }) => {
  const [field, meta] = useField(props);
  const showErr = meta.touched && meta.error ? true : false;

  return (
    <div className="form__group">
      <label className="form__label" htmlFor={props.id || props.name}>
        {label}
      </label>

      <textarea
        className={`form__input${edit ? "--edit" : ""} border ${
          showErr ? " border--danger shadow--none " : ""
        }`}
        title={edit ? "Click to edit" : ""}
        style={{ height: "150px" }}
        id={props.id ? props.id : props.name}
        {...field}
        {...props}
      />

      {showErr ? <div className="text--danger">{meta.error}</div> : null}
    </div>
  );
};

export default TextAreaInput;
