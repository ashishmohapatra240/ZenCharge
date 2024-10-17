"use client";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { TimerContainer } from "../components/TimerContainer";

const Home: NextPage = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const targetDate = new Date("2024-11-06T00:00:00").getTime();

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(updateTime);
  }, [targetDate]);

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-lg mx-4 text-center tracking-tight ">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-white text-white text-center">
          ZenCharge is revolutionizing the way we travel.
        </h1>
        <p className="text-base md:text-lg mb-6 text-white text-center">
          Our network of EV charging stations combines convenience, comfort, and
          sustainability.
        </p>

        {message ? (
          <h2 className="text-2xl font-semibold mt-10">{message}</h2>
        ) : (
          <TimerContainer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
