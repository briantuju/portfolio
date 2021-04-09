/* eslint-disable react/prop-types */

/**
 * Ion-icon component
 */
const Icon = ({ name = "", size = "", handleClick = null, ...props }) => {
  return (
    <span onClick={handleClick} {...props} className="ion-icon">
      <ion-icon name={name} size={size}></ion-icon>
    </span>
  );
};

export default Icon;
