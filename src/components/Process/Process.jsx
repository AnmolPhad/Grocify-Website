import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const renderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={`flex-1 basis-[300px] ${
          item.id % 2 === 0 ? "md:-mt-100" : ""
        }`}
      >
        {/* Number Circle */}
        <div className="flex justify-center">
          <span className="flex w-18 h-18 rounded-full justify-center items-center text-8xl text-white bg-zinc-800 outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">
            {item.number}
          </span>
        </div>

        {/* Icon + Text */}
        <div className="flex items-center mt-10 gap-x-5">
          <span className="flex bg-gradient-to-b from-orange-400 to-orange-600 text-white w-15 h-15 rounded-full justify-center items-center text-3xl md:mx-auto">
            {item.icon}
          </span>

          <div className="flex-1">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-600 mt-2">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section >
      <div className="max-w-[1400px] mx-auto px-10 py-20" id="process">
        <div className="mr-auto w-fit">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="flex md:mt-20 mt-10 items-center justify-center flex-wrap md:pt-45 gap-y-17">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled className="leading-none" />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled className="leading-none" />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled className="leading-none" />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled className="leading-none" />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
