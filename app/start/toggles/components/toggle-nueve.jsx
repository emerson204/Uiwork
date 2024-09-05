import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function ToggleNueve() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
       <label className="switch">
        <input className="peer hidden" type="checkbox" />
        <span className="slider absolute h-5 w-5 translate-x-0.5 translate-y-0.5 rounded-md border-2 border-black bg-blue-500 shadow-[inset_2px_3px_2px] duration-700 peer-checked:translate-x-[1.6rem] peer-checked:border-gray-200 peer-checked:bg-white peer-checked:shadow-[inset_-2px_-2px_3px]"></span>
        <div className="h-6 w-12 rounded-lg border-2 border-black shadow-[2px_3px_2px] duration-700 peer-checked:bg-blue-500"></div>
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
    <ContentBg className="bg-white">
      <label className="switch">
        <input className="peer hidden" type="checkbox" />
        <span className="slider absolute h-5 w-5 translate-x-0.5 translate-y-0.5 rounded-md border-2 border-black bg-blue-500 shadow-[inset_2px_3px_2px] duration-700 peer-checked:translate-x-[1.6rem] peer-checked:border-gray-200 peer-checked:bg-white peer-checked:shadow-[inset_-2px_-2px_3px]"></span>
        <div className="h-6 w-12 rounded-lg border-2 border-black shadow-[2px_3px_2px] duration-700 peer-checked:bg-blue-500"></div>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
