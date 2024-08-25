import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date("2024-08-28T00:00:00"); // Replace with your target end date
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    // const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 ">
      <h2 className="text-sm font-bold mb-4">Hurry Up! Offer ends in:</h2>
      <div className="flex justify-center items-center space-x-2">
        <div className="flex  items-center justify-center  ">
          <span className="text-4xl  bg-gray-300 p-2 rounded-lg">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <p className="text-2xl font-bold ml-2">:</p>
        </div>
        <div className="flex  items-center justify-center  ">
          <span className="text-4xl  bg-gray-300 p-2 rounded-lg">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <p className="text-2xl font-bold ml-2">:</p>
        </div>
        <div className="flex  items-center justify-center  ">
          <span className="text-4xl  bg-gray-300 p-2 rounded-lg">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="flex gap-10 items-center justify-center ">
        <span className="text-sm text-gray-600 uppercase ">Hours</span>
        <span className="text-sm text-gray-600 uppercase mr-2 ">mins</span>
        <span className="text-sm text-gray-600 uppercase mr-2">secs</span>
      </div>
    </div>
  );
};

export default Countdown;
