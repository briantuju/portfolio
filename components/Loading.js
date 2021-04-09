/* eslint-disable react/prop-types */

// Spinning loading component
export const Spinner = ({ className }) => {
  return <div className={`load--circle ${className ? className : ""}`}></div>;
};

// Inline spinning component
export const SpinnerInline = ({ className }) => {
  return (
    <div className="load--wrapper">
      <div
        className={`load--circle-inline ${className ? className : ""}`}
      ></div>
      <span className="load--text">Loading</span>
    </div>
  );
};

// Overlay loading component
export const Overlay = ({ className, children }) => {
  return (
    <div className="load--overlay">
      <span className={`load--overlay__icon ${className ? className : ""}`}>
        <Spinner />
      </span>
      {children}
    </div>
  );
};
