/**
 * CustomDot component
 *
 * A custom dot component for the react-multi-carousel
 * that renders a small yellow or gray dot based on the active state
 *
 * @param {Object} props The component props
 * @param {Function} props.onClick The function to be called when the dot is clicked
 * @param {Boolean} props.active The active state of the dot
 * @returns {ReactElement} The JSX element to be rendered
 */
const CustomDot = ({ onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={
        /* The class name is based on the active state */
        `w-2 h-2 rounded-full border-none cursor-pointer mx-1 transition-transform duration-300 ` +
        (active ? "bg-yellow-300 w-7 h-2" : "bg-gray-400")
      }
    />
  );
};

/**
 * The default export of the module
 */
export default CustomDot;

