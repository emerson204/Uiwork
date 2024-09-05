import { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function CheckboxDiez() {
  const [copyText, setCopyText] = useState(false);
  const copyCode = `
    <label
        htmlFor="hr"
        className="flex flex-row items-center gap-2.5 dark:text-white light:text-black"
      >
        <input id="hr" type="checkbox" className="peer hidden" />
        <div
          htmlFor="hr"
          className="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-[#7152f3] transition"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5 light:stroke-[#e8e8e8] dark:stroke-[#212121]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.6111L8.92308 17.5L20 6.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        Front-end
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
      <label
        htmlFor="hr"
        className="flex flex-row items-center gap-2.5 dark:text-white light:text-black"
      >
        <input id="hr" type="checkbox" className="peer hidden" />
        <div
          htmlFor="hr"
          className="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-[#7152f3] transition"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5 stroke-white dark:stroke-[#212121]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.6111L8.92308 17.5L20 6.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        Front-end
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
