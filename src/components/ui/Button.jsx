import {cn} from "@/lib/utils";
function Button({ className, children }) {
  return (
    <button
      className={cn(
        "bg-yellow-300 py-2 px-6  hover:translate-y-[-5px] transition-all duration-300 rounded-md",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
