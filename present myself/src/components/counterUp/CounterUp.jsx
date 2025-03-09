import React, { useState } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import HappyGif from "./../../assets/icons-happy.gif";
import CompletedIcon from "./../../assets/icons-completed.png";
import CodeGif from "./../../assets/icons8-code.gif";
import downloadGif from "./../../assets/icons-download.gif";

function CounterUp() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="flex justify-center pt-10">
      <div className="w-4xl grid grid-cols-12 gap-5 mb-15">
        <div className="col-span-3 bg-neutral-400 rounded-xl pb-5">
          <div className="flex justify-between p-5 items-center flex-row-reverse">
            <h2>Happy Clients</h2>
            <img src={HappyGif} alt="" className="rounded-full w-7" />
          </div>
          <p className="text-7xl font-semibold text-center">
            <CountUp start={0} end={105} duration={5} delay={0} />
          </p>
        </div>

        <div className="col-span-3 bg-neutral-400 rounded-xl">
          <div className="flex justify-between p-5 items-center flex-row-reverse">
            <h2 className="text-xs">completed projects</h2>
            <img
              src={CompletedIcon}
              alt=""
              className="w-7 bg-white p-0.4 rounded-xs"
            />
          </div>
          <p className="text-7xl font-semibold text-center">
          <CountUp start={0} end={81} duration={5} delay={0}/>
          </p>
        </div>

        <div className="col-span-3 bg-neutral-400 rounded-xl">
          <div className="flex justify-between p-5 items-center flex-row-reverse">
            <h2>lines of code</h2>
            <img src={CodeGif} alt="" className="rounded-sm w-7" />
          </div>
          <p className="text-5xl font-semibold text-center pt-3">
          <CountUp start={0} end={810455} duration={5} delay={0}/>
            </p>
        </div>

        <div className="col-span-3 bg-neutral-400 rounded-xl">
          <div className="flex justify-between p-5 items-center flex-row-reverse">
            <h2>file download</h2>
            <img src={downloadGif} alt="" className="rounded-xs w-7" />
          </div>
          <p className="text-7xl font-semibold text-center">
          <CountUp start={0} end={455} duration={5} delay={0}/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CounterUp;
