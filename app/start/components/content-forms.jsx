import React from "react";

export default function ContentForms({ children, className }) {
  return (
    <div
      className={`${className} xl:w-[35rem] lg:w-[32rem] h-[35rem] xl:mx-0 lg:mx-auto  flex justify-center items-center rounded-md border border-gray-300 dark:border-transparent relative`}
    >
      {children}
    </div>
  );
}
