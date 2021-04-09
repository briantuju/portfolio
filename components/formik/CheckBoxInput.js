/* eslint-disable react/prop-types */
import { useField } from "formik";

const CheckBoxInput = ({ children, checked, className, ...props }) => {
  /* 
    React treats radios and checkbox inputs differently other input types, 
    select, and textarea.
    Formik does this too! When you specify `type` to useField(), it will
    return the correct bag of props for you
  */
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="form__group">
      <label
        className="form__label font--normal check"
        htmlFor={props.id || props.name}
      >
        <input
          type="checkbox"
          className={`form__checkbox check__input ${
            className ? className : ""
          }`}
          checked={checked}
          id={props.id ? props.id : props.name}
          {...field}
          {...props}
        />
        <div className="check__fill float--left"></div>
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div className="text--danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CheckBoxInput;
