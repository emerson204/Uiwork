import React, { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function BotonVeintitres() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
    <div className="group relative">
    <button>
      <svg
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        height="44"
        width="44"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
        fill="none"
      >
        <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
        <path d="M8 9h8"></path>
        <path d="M8 13h6"></path>
        <path
          d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
        ></path>
      </svg>
    </button>
    <span
      className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
        >Comment <span> </span
      ></span>
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
    <ContentBg className="bg-white">
      <div className="group relative">
        <button>
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            height="44"
            width="44"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 hover:scale-125 duration-200 text-black hover:stroke-blue-500"
            fill="none"
          >
            <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
          </svg>
        </button>
        <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-black">
          Comment <span> </span>
        </span>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
