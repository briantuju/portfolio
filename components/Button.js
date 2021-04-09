/* eslint-disable react/prop-types */
import { SpinnerInline } from "./Loading";

export default function Button({
  type = "button",
  isLoading = false,
  children,
  ...props
}) {
  return (
    <button type={type} className="btn" data-disabled={isLoading} {...props}>
      {isLoading ? <SpinnerInline /> : children}
    </button>
  );
}
