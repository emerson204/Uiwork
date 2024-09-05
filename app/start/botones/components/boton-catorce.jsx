import React, { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function BotonCatorce() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
   <button className="smky-btn3 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">Hover ME</button>
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
      <button className="smky-btn3 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
        Hover ME
      </button>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
