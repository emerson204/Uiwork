import { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function CheckboxDos() {
  const [copyText, setCopyText] = useState(false);
  const copyCode = `
    <input
        type="checkbox"
        id="react-option"
        value=""
        className="hidden peer"
        required=""
      />

      <label
        htmlFor="react-option"
        className="flex z-10 items-center peer relative justify-center w-14 h-14 shadow-lg duration-300 [box-shadow:1px_1px_0px_1px_#eab92d] border-2 border-gray-800 peer-checked:border-2 peer-checked:border-gray-800 rounded-lg cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_1px_#075985] peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]"
      ></label>
      <svg
        className="absolute stroke-sky-800 w-12 h-23 duration-300 peer-checked:opacity-100 opacity-0"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          className="svg-stroke-primary"
          d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        ></path>
      </svg>
      <svg
        className="absolute stroke-yellow-500 w-12 h-23 duration-300 peer-checked:opacity-0 opacity-100"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          className="svg-stroke-primary"
          d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        ></path>
      </svg>
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
      <input
        type="checkbox"
        id="react-option"
        value=""
        className="hidden peer"
        required=""
      />

      <label
        htmlFor="react-option"
        className="flex z-10 items-center peer relative justify-center w-14 h-14 shadow-lg duration-300 [box-shadow:1px_1px_0px_1px_#eab92d] border-2 border-gray-800 peer-checked:border-2 peer-checked:border-gray-800 rounded-lg cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_1px_#075985] peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]"
      ></label>
      <svg
        className="absolute stroke-sky-800 w-12 h-23 duration-300 peer-checked:opacity-100 opacity-0"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          className="svg-stroke-primary"
          d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        ></path>
      </svg>
      <svg
        className="absolute stroke-yellow-500 w-12 h-23 duration-300 peer-checked:opacity-0 opacity-100"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          className="svg-stroke-primary"
          d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        ></path>
      </svg>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
