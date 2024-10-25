import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Pricinglist from "./Pricinglist";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden " id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img src={smallSphere} width={225} height={225} alt="sphere" />
          <div className="absolute top-1/2 left1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once use forever"
        />
        <div className="relative">
          <Pricinglist />
          <LeftLine />
          <RightLine />
          <div className="flex justify-center mt-10">
            <a
              className="text-xs font-code font-bold tracking-wider uppercse border-b"
              href="./pricing"
            >
              {" "}
              See the full details
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;