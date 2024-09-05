import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function ToggleOcho() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
     <label
        htmlFor="nav_bar_icon"
        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
      >
        <input id="nav_bar_icon" type="checkbox" className="hidden peer" />
        <div className="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"></div>
        <div className="w-full h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"></div>
        <div className="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"></div>
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
      <label
        htmlFor="nav_bar_icon"
        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
      >
        <input id="nav_bar_icon" type="checkbox" className="hidden peer" />
        <div className="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"></div>
        <div className="w-full h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"></div>
        <div className="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"></div>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
