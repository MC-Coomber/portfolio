"use client";
import { ImageContext } from "@/context/image-context";
import Image from "next/image";
import { useContext } from "react";
import Flutter from "../assets/flutter.png";
import React from "../assets/react.png";
import Bio from "./bio";

export default function Sidebar() {
  const { currentImage } = useContext(ImageContext);

  return (
    <div className="flex flex-col lg:w-1/3 lg:max-h-screen lg:sticky lg:py-24 top-0 w-full gap-8 bg-gray-800 px-16 text-center">
      <header className="text-white flex flex-col gap-12">
        <h1 className="text-4xl font-bold">Mike Coomber</h1>
        <h1 className="text-2xl">Front End Developer</h1>
        <h2 className="text-lg">
          I'm Mike Coomber, a Front-End Developer with almost four years of
          experience in the SaaS industry. Proficient in React and Flutter, I
          love solving problems bo. Beyond development, my project management
          skills play a pivotal role in contributing to the success of various
          projects. I take pride in delivering visually appealing interfaces
          while efficiently coordinating tasks and timelines. Staying updated on
          the latest web development technologies is my commitment, making me a
          valuable asset for teams in need of top-notch front-end development,
          UX design, and effective project management.
        </h2>
        <div className="flex justify-evenly">
          <Image src={Flutter} alt="flutter" width={60} />
          <Image src={React} alt="flutter" width={80} />
        </div>
        {/* <div className="flex flex-1 bg-white p-8"> */}
        {/* </div> */}
        {/* <Bio /> */}
      </header>
    </div>
  );
}
