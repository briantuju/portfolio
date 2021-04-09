/* eslint-disable react/prop-types */
import { useField } from "formik";

// Custom HTML select element
const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select {...field} {...props} />

      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default SelectInput;
