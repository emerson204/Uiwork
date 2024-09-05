import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function ToggleDiez() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
      <label className="relative block aspect-[2/0.75] w-20 rounded-full bg-gradient-to-br from-purple-100 via-violet-600 shadow-2xl shadow-purple-300 transition-all duration-300 hover:bg-[length:100%_500%] focus:bg-[length:100%_500%] bg-[length:100%_100%]">
        <input className="peer/input hidden" type="checkbox" />
        <div className="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white bg-gradient-to-t transition-all duration-500 peer-checked/input:left-[63%] peer-checked/input:-rotate-6"></div>
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
      <label className="relative block aspect-[2/0.75] w-20 rounded-full bg-gradient-to-br from-purple-100 via-violet-600 shadow-2xl shadow-purple-300 transition-all duration-300 hover:bg-[length:100%_500%] focus:bg-[length:100%_500%] bg-[length:100%_100%]">
        <input className="peer/input hidden" type="checkbox" />
        <div className="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white bg-gradient-to-t transition-all duration-500 peer-checked/input:left-[63%] peer-checked/input:-rotate-6"></div>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
