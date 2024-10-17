import React from "react";
import { NumberBox } from "./NumberBox";

interface timeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
}: timeProps) => {
  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  // Convert values to numbers for comparison
  const numDays = Number(days);
  const numHours = Number(hours);
  const numMinutes = Number(minutes);
  const numSeconds = Number(seconds);

  if (numSeconds <= 0 && numMinutes <= 0 && numHours <= 0 && numDays <= 0) {
    daysFlip = false;
    hoursFlip = false;
    minutesFlip = false;
    secondsFlip = false;
  }

  if (numSeconds === 0) {
    if (numMinutes !== 0) {
      seconds = 59;
    }

    secondsFlip = false;
    minutesFlip = true;
  }
  if (numMinutes === 0) {
    if (numHours !== 0) {
      minutes = 59;
    }

    minutesFlip = false;
    hoursFlip = true;
  }

  if (numHours === 0) {
    hoursFlip = false;
    if (numDays !== 0) {
      daysFlip = true;
    }
  }

  // Pad numbers with leading zeros
  days = numDays < 10 ? "0" + numDays : numDays;
  hours = numHours < 10 ? "0" + numHours : numHours;
  minutes = numMinutes < 10 ? "0" + numMinutes : numMinutes;
  seconds = numSeconds < 10 ? "0" + numSeconds : numSeconds;

  return (
    <div className=" mt-2 md:mt-20 rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-6 md:py-8">
        <NumberBox num={days} unit="Days" flip={daysFlip} />
        <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={hours} unit="Hours" flip={hoursFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};
