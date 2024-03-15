import React from "react";
import Loader from "../assets/loader1.png";

const Loading = () => {
  return (
    <div className=" absolute top-0 left-0 z-10 w-full flex items-center justify-center  min-h-screen  bg-neutral-800 ">
      <img
        src={Loader}
        alt="Loading"
        className="w-[20%] sm:w-[6%] animate-spin  "
      />
    </div>
  );
};

export default Loading;
