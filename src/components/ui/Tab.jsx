import { cn } from "@/lib/utils";
function Tab({ children, className }) {
  return <div className={cn(`cursor-pointer `, className)}>{children}</div>;
}

export default Tab;
