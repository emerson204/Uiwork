import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function ToggleQuince() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
     <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="group peer ring-0 [box-shadow:1px_3px_0px_0px_#000]  bg-gradient-to-r from-rose-400 to-red-900  rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute  peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none  after:h-10 after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900"></div>
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
        <div className="group peer ring-0 [box-shadow:1px_3px_0px_0px_#000]  bg-gradient-to-r from-rose-400 to-red-900  rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute  peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none  after:h-10 after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900"></div>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
