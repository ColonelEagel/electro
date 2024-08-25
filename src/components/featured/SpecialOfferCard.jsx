import Countdown from "./CountDown";

import joyStickImg from "@/assets/images/featured/img1.jpg";

function SpecialOfferCard() {
  return (
    <div className="h-full p-4 rounded-3xl border-2 border-yellow-300 ">
      {/* header */}
      <div className="capitalize  flex justify-between font-semibold">
        <p>
          special
          <br />
          offer
        </p>
        <p className="text-sm bg-gray-700 text-white px-7 py-2 rounded-xl">
          save
          <br /> %20
        </p>
      </div>
      {/* image */}
      <div className="w-full">
        <img src={joyStickImg} alt="" />
      </div>
      {/* description */}
      <p className=" w-full text-center text-blue-800 font-bold">
        game console controller <br /> + usb 3.0 cable
      </p>
      {/* offer */}
      <p className="w-full text-center">
        <span className="text-sm text-gray-500 line-through">$99,00</span>
        <span className="text-2xl font-bold ml-2 text-red-500">$79,00</span>
      </p>
      {/* available pieces */}
      <div className="w-full text-center">
        <p className="flex justify-between ">
          <span className="capitalize">
            available: <strong>6</strong>
          </span>
          <span className="ml-2 capitalize">
            already sold: <strong>28</strong>
          </span>
        </p>
        {/* meter */}
        <div className=" bg-gray-200 rounded-xl h-4 mt-4">
          <span className="bg-yellow-300 w-[calc((6/34)*100%)] h-full rounded-xl block"></span>
        </div>
      </div>

      {/* countdown */}
      <Countdown />
    </div>
  );
}

export default SpecialOfferCard;
