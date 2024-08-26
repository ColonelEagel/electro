/**
 * A reusable container component that centers its content horizontally
 * and applies a maximum width of 3/4 the viewport width on large screens.
 *
 * @param {React.ReactNode} children The content to be rendered inside the container
 * @param {string} className Any additional CSS classes to apply to the container
 * @param {Object} props Any additional props to pass through to the container element
 * @returns {ReactElement} The JSX element to be rendered
 */
import { cn } from "@/lib/utils";
function Container({ children, className, ...props }) {
  return (
    <div
      className={cn("lg:w-3/4 flex mx-auto p-1 ", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;