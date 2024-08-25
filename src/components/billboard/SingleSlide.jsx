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
            <span className="text-2xl font-semibold mt-4">$749.99</span>
          </p>
          <Button className="mt-6  ">Start Buying</Button>
        </div>

        {/* image /right */}
        <div className="mt-auto w-1/2">
          <img src={imageUrl} alt={imageAlt} className="h-full " />
        </div>
      </div>
    </div>
  );
};

export default SingleSlide;
