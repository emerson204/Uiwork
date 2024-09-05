import React, { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function BotonDiez() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
    <button
     className="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce  hover:animate-none"
    >
    <svg
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        strokeLinejoin="round"
        strokeLinecap="round"
        ></path>
      </svg>
    </button>


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
    <ContentBg className="bg-white">
      <button className="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none">
        <svg
          className="w-5 h-5"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
