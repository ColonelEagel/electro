import Button from "@/components/ui/Button";

const SingleSlide = ({ imageUrl, imageAlt }) => {
  return (
    <div className=" mx-auto max-w-4xl h-[420px] ">
      <div className="flex justify-between items-center w-full h-full">
        {/* text /left */}
        <div className="h-2/3 w-1/2 mb-auto">
          <h2 className=" text-5xl lg:text-7xl font-thin uppercase">
            The New <br /> Standard
          </h2>
          <p className="text-lg mt-2">Under Favorable Smartwatches</p>
          <p className="">
            from <br />{" "}
            <div className="flex items-start font-bold">
              <span className="text-3xl">$</span>
              <span className="text-6xl font-bold leading-none">749</span>
              <span className="text-3xl">99</span>
            </div>
          </p>
          <Button className="mt-6  px-8">Start Buying</Button>
        </div>

        {/* image /right */}
        <div className="mt-auto w-1/2">
          <img src={imageUrl} alt={imageAlt} className="h-full " draggable="false"/>
        </div>
      </div>
    </div>
  );
};

export default SingleSlide;
