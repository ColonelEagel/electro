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
