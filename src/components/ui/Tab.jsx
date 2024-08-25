import {cn} from "@/lib/utils";
function Tab({ index, children, className }) {
  return (
    <div
      className={cn(
        `cursor-pointer ${
          index === 0 ? " border-b-2 border-yellow-300 font-bold" : ""
        }`,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Tab;
