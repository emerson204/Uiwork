import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ContentBgWidth from "../../components/content-bg-width";
import ButtonCopy from "../../components/button-copy";

export default function CardOnce() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
     <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
        <div className="success-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
          <div className="flex gap-2">
            <div className="text-[#2b9875] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-white">done successfully :)</p>
              <p className="text-gray-500">This is the description section</p>
            </div>
          </div>
          <button className="text-gray-600 hover:bg-white/5 p-1 rounded-md transition-colors ease-linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
  `;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(copyCode);
      setCopyText(true);

      toast({
        title: "Copiado correctamente ✅",
      });

      setTimeout(() => {
        setCopyText(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContentBgWidth className="bg-white">
      <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
        <div className="success-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
          <div className="flex gap-2">
            <div className="text-[#2b9875] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-white">done successfully :)</p>
              <p className="text-gray-500">This is the description section</p>
            </div>
          </div>
          <button className="text-gray-600 hover:bg-white/5 p-1 rounded-md transition-colors ease-linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBgWidth>
  );
}
