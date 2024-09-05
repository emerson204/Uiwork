import React, { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function BotonDieciocho() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
   <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
    <span className="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">Blink</span>
    <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
    <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
    
      <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
    <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
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
    <ContentBg className="bg-[#212121]">
      <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
        <span className="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">
          Blink
        </span>
        <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>

        <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
      </button>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
