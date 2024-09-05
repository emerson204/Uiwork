import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function InputNueve() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
      <div className="input flex flex-col w-fit static">
        <label
          htmlFor="input"
          className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
        >
          Password:
        </label>
        <input
          id="passwords"
          type="password"
          placeholder="Write here..."
          name="input"
          className="border-blue-500 input px-[10px] py-[11px] text-xs bg-white text-black border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25"
        />
      </div>
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
      <div className="input flex flex-col w-fit static">
        <label
          htmlFor="input"
          className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
        >
          Password:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Write here..."
          name="input"
          className="border-blue-500 input px-[10px] py-[11px] text-xs bg-white text-black border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25"
        />
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
