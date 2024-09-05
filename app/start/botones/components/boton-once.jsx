import React, { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function BotonOnce() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
     <label
      className="w-16 h-8 bg-black shadow-inner rounded-full flex justify-around items-center overflow-hidden outline outline-2 outline-offset-2"
    >
      <input type="checkbox" className="peer hidden" />
      <div
        className="w-6 h-6 flex justify-center items-center text-white bg-black border-[2px] duration-500 rounded-full peer-checked:-translate-x-8"
      ></div>
      <div
        className="w-6 h-6 flex justify-center items-center text-white duration-500 rounded-full translate-x-8 peer-checked:translate-x-0 rotate-90"
      >
        𝝞
      </div>
    </label>


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
    <ContentBg className="bg-white dark:bg-[#212121]">
      <label className="w-16 h-8 bg-black shadow-inner rounded-full flex justify-around items-center overflow-hidden outline outline-2 outline-offset-2">
        <input type="checkbox" className="peer hidden" />
        <div className="w-6 h-6 flex justify-center items-center text-white bg-black border-[2px] duration-500 rounded-full peer-checked:-translate-x-8"></div>
        <div className="w-6 h-6 flex justify-center items-center text-white duration-500 rounded-full translate-x-8 peer-checked:translate-x-0 rotate-90">
          𝝞
        </div>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
