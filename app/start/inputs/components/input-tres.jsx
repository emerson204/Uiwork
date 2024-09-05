import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function InputTres() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
      <div className="relative">
        <input
          type="text"
          placeholder="Username Here..."
          className="w-64 py-2 pl-8 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 text-gray-500"
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle
              strokeWidth="1.5"
              stroke="#1C274C"
              r="4"
              cy="6"
              cx="10"
            ></circle>
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#1C274C"
              d="M21 10H19M19 10H17M19 10L19 8M19 10L19 12"
            ></path>
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#1C274C"
              d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634"
            ></path>
          </g>
        </svg>
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
      <div className="relative">
        <input
          type="text"
          placeholder="Username Here..."
          className="w-64 py-2 pl-8 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 text-gray-500"
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle
              strokeWidth="1.5"
              stroke="#1C274C"
              r="4"
              cy="6"
              cx="10"
            ></circle>
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#1C274C"
              d="M21 10H19M19 10H17M19 10L19 8M19 10L19 12"
            ></path>
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#1C274C"
              d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634"
            ></path>
          </g>
        </svg>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
