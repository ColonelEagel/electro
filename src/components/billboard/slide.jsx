const Slide = ({ imageUrl, imageAlt }) => {
  // console.log(imageUrl, imageAlt);

  return (
    <div className=" mx-auto max-w-4xl h-[420px] ">
      <div className="flex justify-between items-center w-full h-full">
        {/* text /left */}
        <div className="h-2/3">
          <h2 className="text-7xl font-thin uppercase">
            The New <br /> Standard
          </h2>
          <p className="text-lg mt-2">Under Favorable Smartwatches</p>
          <p className="">
            from <br />{" "}
            <span className="text-2xl font-semibold mt-4">$749.99</span>
          </p>
          <button className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded">
            Start Buying
          </button>
        </div>

        {/* image /right */}
        <div className="mt-auto h-full">
          <img src={imageUrl} alt={imageAlt} className="h-full " />
        </div>
      </div>
    </div>
  );
};

export default Slide;
