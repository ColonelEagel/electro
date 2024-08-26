function RecentlyViewedHeader() {
  return (
    <div className="flex justify-between py-2 border-b-2 border-gray-200 w-full">
      <div className="text-xl  text-center mb-4 self-start relative after:contents-[''] after:absolute after:bottom-[-26px] after:left-0 after:right-0 after:h-[2px] after:bg-yellow-300 ">
        Recently Viewed
      </div>
    </div>
  );
}

export default RecentlyViewedHeader;
