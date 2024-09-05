import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function InputSiete() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
      <div className="w-full max-w-[17rem] p-5 bg-white rounded-lg font-mono">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="unique-input"
        >
          Your Label
        </label>
        <input
          className="text-sm custom-input w-full px-4 py-2 border text-black border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
          placeholder="Enter text here"
          type="text"
          id="unique-input"
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
    <ContentBg className="bg-[#212121]">
      <div className="w-full max-w-[17rem] p-5 bg-white rounded-lg font-mono">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="unique-input"
        >
          Your Label
        </label>
        <input
          className="text-sm custom-input w-full px-4 py-2 border text-black border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
          placeholder="Enter text here"
          type="text"
          id="unique-input"
        />
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
