import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function InputDiez() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
       <div className="flex shadow-sm">
        <input
          value="Copy Me"
          readOnly=""
          className="py-1 indent-2 rounded-s-lg focus:outline-none"
          name="text"
          type="text"
        />
        <button className="py-1 rounded-e-lg text-white bg-green-300 flex justify-center items-center w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none"
          >
            <rect width="24" height="24"></rect>
            <rect
              x="4"
              y="8"
              width="12"
              height="12"
              rx="1"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></rect>
            <path
              d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2 2"
            ></path>
          </svg>
        </button>
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
    <ContentBg className="bg-[#212121]">
      <div className="flex shadow-sm">
        <input
          value="Copy Me"
          onChange={(e) => e.target.value}
          className="py-1 indent-2 rounded-s-lg focus:outline-none"
          name="text"
          type="text"
        />
        <button className="py-1 rounded-e-lg text-white bg-green-300 flex justify-center items-center w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none"
          >
            <rect width="24" height="24"></rect>
            <rect
              x="4"
              y="8"
              width="12"
              height="12"
              rx="1"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></rect>
            <path
              d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2 2"
            ></path>
          </svg>
        </button>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
