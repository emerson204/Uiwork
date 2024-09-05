import React, { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function BotonVeintiocho() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
   <button
      className="flex overflow-hidden ring-[5px] ring-white w-[5.1rem] hover:w-[6.5rem] items-center gap-2 cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-5 py-2 rounded-full transition-all ease-in-out hover:scale hover:scale-105 font-[revert] active:scale-100 shadow-lg"
    >
      Click
      <svg
        className="size-6 mt-0.5"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
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
      <button className="flex overflow-hidden ring-[5px] ring-white w-[5.1rem] hover:w-[6.5rem] items-center gap-2 cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-5 py-2 rounded-full transition-all ease-in-out hover:scale hover:scale-105 font-[revert] active:scale-100 shadow-lg">
        Click
        <svg
          className="size-6 mt-0.5"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
