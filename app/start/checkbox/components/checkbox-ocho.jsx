import { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function CheckboxOcho() {
  const [copyText, setCopyText] = useState(false);
  const copyCode = `
    <label className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
        <input className="hidden peer" type="checkbox" />
        <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center rotate-90 -translate-x-[0.3rem] translate-y-[0.1rem] peer-checked:translate-y-[0.1rem]"></div>
        <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.05rem] peer-checked:rotate-[-30deg] peer-checked:translate-y-[0.22rem] peer-checked:translate-x-[0.15rem]"></div>
        <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.16rem] peer-checked:rotate-[30deg] peer-checked:translate-y-[-0.4rem] peer-checked:translate-x-[0.15rem]"></div>
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
    <ContentBg className="bg-[#212121]">
      <label className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
        <input className="hidden peer" type="checkbox" />
        <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center rotate-90 -translate-x-[0.3rem] translate-y-[0.1rem] peer-checked:translate-y-[0.1rem]"></div>
        <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.05rem] peer-checked:rotate-[-30deg] peer-checked:translate-y-[0.22rem] peer-checked:translate-x-[0.15rem]"></div>
        <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.16rem] peer-checked:rotate-[30deg] peer-checked:translate-y-[-0.4rem] peer-checked:translate-x-[0.15rem]"></div>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
