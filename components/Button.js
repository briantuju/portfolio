/* eslint-disable react/prop-types */

export default function Button({ type = "button", children, ...props }) {
  return (
    <button type={type} className="btn" {...props}>
      {children}
    </button>
  );
}
