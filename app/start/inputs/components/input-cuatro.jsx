import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function InputCuatro() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
    <div className="shadow-lg flex gap-2 items-center bg-white p-2 hover:shadow-xl duration-300 hover:border-2 border-gray-400 group delay-200 rounded-md">
        <svg
          className="group-hover:rotate-[360deg] duration-300 dark:text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <path d="M22 6l-10 7L2 6"></path>
        </svg>
        <input
          type="email"
          name="text"
          className="flex-1 focus:outline-none bg-white dark:text-black"
          placeholder="Email"
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
      <div className="shadow-lg flex gap-2 items-center bg-white p-2 hover:shadow-xl duration-300 hover:border-2 border-gray-400 group delay-200 rounded-md">
        <svg
          className="group-hover:rotate-[360deg] duration-300 dark:text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <path d="M22 6l-10 7L2 6"></path>
        </svg>
        <input
          type="email"
          name="text"
          className="flex-1 focus:outline-none bg-white dark:text-black"
          placeholder="Email"
        />
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
