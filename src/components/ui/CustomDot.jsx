const CustomDot = ({ onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`w-2 h-2 rounded-full border-none cursor-pointer mx-1 transition-transform duration-300 ${
        active ? "bg-yellow-300 w-7 h-2" : "bg-gray-400"
      }`}
    />
  );
};

export default CustomDot;
