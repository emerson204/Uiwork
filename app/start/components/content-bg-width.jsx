import React from "react";

export default function ContentBgWidth({ children, className }) {
  return (
    <div
      className={`${className} xl:w-[23rem] md:w-[22rem] w-[97%] mx-auto sm:mx-0 h-[23rem] xl:mx-0 lg:mx-auto flex justify-center items-center rounded-md border border-gray-300 dark:border-transparent relative`}
    >
      {children}
    </div>
  );
}
