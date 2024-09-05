import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ContentBgWidth from "../../components/content-bg-width";
import ButtonCopy from "../../components/button-copy";

export default function CardCinco() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
     <div className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
        <div>
          <h1 className="text-[2em] font-medium">Heading</h1>
          <p className="text-[0.85em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorum blanditiis pariatur sequi magni.
          </p>
        </div>

        <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
          <p>Button</p>
          <svg
            className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
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
    <ContentBgWidth className="bg-[#212121]">
      <div className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
        <div>
          <h1 className="text-[2em] font-medium">Heading</h1>
          <p className="text-[0.85em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorum blanditiis pariatur sequi magni.
          </p>
        </div>

        <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
          <p>Button</p>
          <svg
            className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBgWidth>
  );
}
