import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function ToggleSiete() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
       <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="peer ring-2 ring-gray-900 bg-gradient-to-r from-rose-400 to-red-900 rounded-xl outline-none duration-300 after:duration-500 w-20 h-8  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-900  after:content-[''] after:rounded-2xl after:absolute after:outline-none after:h-12 after:w-12 after:bg-gray-50 after:-top-2 after:-left-2 after:flex after:justify-center after:items-center after:border-4 after:border-gray-900  peer-checked:after:translate-x-14"></div>
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
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="peer ring-2 ring-gray-900 bg-gradient-to-r from-rose-400 to-red-900 rounded-xl outline-none duration-300 after:duration-500 w-20 h-8  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-900  after:content-[''] after:rounded-2xl after:absolute after:outline-none after:h-12 after:w-12 after:bg-gray-50 after:-top-2 after:-left-2 after:flex after:justify-center after:items-center after:border-4 after:border-gray-900  peer-checked:after:translate-x-14"></div>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
