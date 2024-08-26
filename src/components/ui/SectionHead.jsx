/**
 * A reusable component for section headings. It renders a horizontal line
 * below the heading text and adds a bit of margin to the bottom of the
 * element.
 *
 * @param {React.ReactNode} children The content to be rendered inside the
 *                                    section heading
 * @param {string} className Any additional CSS classes to apply to the
 *                           section heading
 * @returns {ReactElement} The JSX element to be rendered
 */

import { cn } from "@/lib/utils";

function SectionHead({ children, className }) {
  return (
    <div
      className={cn(
        "flex justify-between py-2 border-b-2 border-gray-200 w-full",
        className
      )}
    >
      <div className="text-xl  text-center mb-4 self-start relative after:contents-[''] after:absolute after:bottom-[-26px] after:left-0 after:right-0 after:h-[2px] after:bg-yellow-300 ">
        {/* The heading text */}
        {children}
      </div>
    </div>
  );
}

/**
 * The default export of the module
 */
export default SectionHead;

