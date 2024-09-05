import { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function CheckboxTres() {
  const [copyText, setCopyText] = useState(false);
  const copyCode = `
    <label
        htmlFor="checkbox"
        className="relative h-[3em] w-[3em] rounded-[1.2em] bg-[#b3fffa] shadow-[inset_-1px_1px_4px_0px_#f0fffe,inset_1px_-1px_4px_0px_#00bdb0,-1px_2px_4px_0px_#00bdb0]"
      >
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="peer appearance-none"
        />
        <span className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 rounded-[0.8em] bg-[#ccfffc] shadow-[inset_-1px_1px_4px_0px_#f0fffe,inset_1px_-1px_4px_0px_#00bdb0,-1px_1px_2px_0px_#00bdb0] duration-[200ms] peer-checked:shadow-[inset_1px_-1px_4px_0px_#f0fffe,inset_-1px_1px_4px_0px_#00bdb0]"></span>
        <svg
          fill="#00756d"
          viewBox="-3.2 -3.2 38.40 38.40"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 peer-checked:opacity-0"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"></path>
          </g>
        </svg>
        <svg
          fill="#00756d"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
          </g>
        </svg>
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
        htmlFor="checkbox"
        className="relative h-[3em] w-[3em] rounded-[1.2em] bg-[#b3fffa] shadow-[inset_-1px_1px_4px_0px_#f0fffe,inset_1px_-1px_4px_0px_#00bdb0,-1px_2px_4px_0px_#00bdb0]"
      >
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="peer appearance-none"
        />
        <span className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 rounded-[0.8em] bg-[#ccfffc] shadow-[inset_-1px_1px_4px_0px_#f0fffe,inset_1px_-1px_4px_0px_#00bdb0,-1px_1px_2px_0px_#00bdb0] duration-[200ms] peer-checked:shadow-[inset_1px_-1px_4px_0px_#f0fffe,inset_-1px_1px_4px_0px_#00bdb0]"></span>
        <svg
          fill="#00756d"
          viewBox="-3.2 -3.2 38.40 38.40"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 peer-checked:opacity-0"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"></path>
          </g>
        </svg>
        <svg
          fill="#00756d"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
          </g>
        </svg>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
