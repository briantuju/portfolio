// Custom button
export default function Button({
  type = "button",
  size = "small",
  children,
  ...props
}) {
  return (
    <button type={type} className={`btn btn--${size}`} {...props}>
      {children}
    </button>
  );
}
