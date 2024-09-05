import { useState } from "react";
import ButtonCopy from "../../components/button-copy";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";

export default function InputUno() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
    <div>
        <label
          htmlFor="inputname"
          className="block text-gray-800 font-semibold text-sm"
        >
          Input Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="inputname"
            className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset bg-white ring-gray-400 focus:text-gray-800"
          />
        </div>
        <label className="pt-1 block text-gray-500 text-sm">
          Some Description
        </label>
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
      <div>
        <label
          htmlFor="inputname"
          className="block text-gray-800 font-semibold text-sm"
        >
          Input Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="inputname"
            className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 bg-white text-gray-800"
          />
        </div>
        <label className="pt-1 block text-gray-500 text-sm">
          Some Description
        </label>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
