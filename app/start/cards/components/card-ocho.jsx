import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ContentBgWidth from "../../components/content-bg-width";
import ButtonCopy from "../../components/button-copy";

export default function CardOcho() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
     <div className="div h-[8em] w-[15em] bg-white m-auto rounded-[1em] relative group p-2 z-0 overflow-hidden">
        <div className="z-[-1] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-green-400 via-lime-400 to-yellow-400 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"></div>

        <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white]">
          <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-50 before:bottom-0 before:left-0">
            More Info
          </span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        <h1 className="z-20 font-bold font-Poppin group-hover:text-white delay-150 text-[1.4em]">
          HEADING
        </h1>
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
      <div className="div h-[8em] text-orange-500 w-[15em] bg-white m-auto rounded-[1em] relative group border border-orange-300 p-2 z-0 overflow-hidden">
        <div className="z-[-1] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-green-400 via-lime-400 to-yellow-400 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"></div>

        <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white]">
          <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-50 before:bottom-0 before:left-0">
            More Info
          </span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        <h1 className="z-20 font-bold font-Poppin group-hover:text-white delay-150 text-[1.4em]">
          HEADING
        </h1>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBgWidth>
  );
}
