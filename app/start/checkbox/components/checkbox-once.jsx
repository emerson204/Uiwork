import { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function CheckboxOnce() {
  const [copyText, setCopyText] = useState(false);
  const copyCode = `
    <form className="space-y-2">
        <div className="flex items-center gap-2">
          <input
            id="check-1"
            type="checkbox"
            className="appearance-none outline-none w-6 h-6 p-1 bg-transparent border border-gray-600 rounded grid place-content-center cursor-pointer checked:border-blue-500 focus-visible:border-pink-500 hover:border-pink-500 checked:after:opacity-100 after:content-[\\2714] after:opacity-0 after:transition-opacity after:duration-150 after:ease-in-out after:text-blue-500 focus-visible:after:text-pink-500 hover:after:opacity-50 hover:after:text-pink-500"
          />
          <label
            htmlFor="check-1"
            className="cursor-pointer text-gray-600 transition-colors duration-150 ease-in-out hover:text-pink-500"
          >
            Checkbox 1
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="check-2"
            type="checkbox"
            defaultChecked
            className="appearance-none outline-none w-6 h-6 p-1 bg-transparent border border-gray-600 rounded grid place-content-center cursor-pointer checked:border-blue-500 focus-visible:border-pink-500 hover:border-pink-500 checked:after:opacity-100 after:content-[\\2714] after:opacity-0 after:transition-opacity after:duration-150 after:ease-in-out after:text-blue-500 focus-visible:after:text-pink-500 hover:after:opacity-50 hover:after:text-pink-500"
          />
          <label
            htmlFor="check-2"
            className="cursor-pointer text-gray-600 transition-colors duration-150 ease-in-out hover:text-pink-500"
          >
            Checkbox 2
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="check-3"
            type="checkbox"
            className="appearance-none outline-none w-6 h-6 p-1 bg-transparent border border-gray-600 rounded grid place-content-center cursor-pointer checked:border-blue-500 focus-visible:border-pink-500 hover:border-pink-500 checked:after:opacity-100 after:content-[\\2714] after:opacity-0 after:transition-opacity after:duration-150 after:ease-in-out after:text-blue-500 focus-visible:after:text-pink-500 hover:after:opacity-50 hover:after:text-pink-500"
          />
          <label
            htmlFor="check-3"
            className="cursor-pointer text-gray-600 transition-colors duration-150 ease-in-out hover:text-pink-500"
          >
            Checkbox 3
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="check-4"
            type="checkbox"
            className="appearance-none outline-none w-6 h-6 p-1 bg-transparent border border-gray-600 rounded grid place-content-center cursor-pointer checked:border-blue-500 focus-visible:border-pink-500 hover:border-pink-500 checked:after:opacity-100 after:content-[\\2714]after:opacity-0 after:transition-opacity after:duration-150 after:ease-in-out after:text-blue-500 focus-visible:after:text-pink-500 hover:after:opacity-50 hover:after:text-pink-500"
          />
          <label
            htmlFor="check-4"
            className="cursor-pointer text-gray-600 transition-colors duration-150 ease-in-out hover:text-pink-500"
          >
            Checkbox 4
          </label>
        </div>
      </form>
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
      <form className="space-y-2">
        <div className="flex items-center gap-2">
          <input
            id="check-1"
            type="checkbox"
            className="appearance-none outline-none w-6 h-6 p-1 bg-transparent border border-gray-600 rounded grid place-content-center cursor-pointer checked:border-blue-500 focus-visible:border-pink-500 hover:border-pink-500 checked:after:opacity-100 after:content-['\2714'] after:opacity-0 after:transition-opacity after:duration-150 after:ease-in-out after:text-blue-500 focus-visible:after:text-pink-500 hover:after:opacity-50 hover:after:text-pink-500"
          />
          <label
            htmlFor="check-1"
            className="cursor-pointer text-gray-600 transition-colors duration-150 ease-in-out hover:text-pink-500"
          >
            Checkbox 1
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="check-2"
            type="checkbox"
            defaultChecked
            className="appearance-none outline-none w-6 h-6 p-1 bg-transparent border border-gray-600 rounded grid place-content-center cursor-pointer checked:border-blue-500 focus-visible:border-pink-500 hover:border-pink-500 checked:after:opacity-100 after:content-['\2714'] after:opacity-0 after:transition-opacity after:duration-150 after:ease-in-out after:text-blue-500 focus-visible:after:text-pink-500 hover:after:opacity-50 hover:after:text-pink-500"
          />
          <label
            htmlFor="check-2"
            className="cursor-pointer text-gray-600 transition-colors duration-150 ease-in-out hover:text-pink-500"
          >
            Checkbox 2
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="check-3"
            type="checkbox"
            className="appearance-none outline-none w-6 h-6 p-1 bg-transparent border border-gray-600 rounded grid place-content-center cursor-pointer checked:border-blue-500 focus-visible:border-pink-500 hover:border-pink-500 checked:after:opacity-100 after:content-['\2714'] after:opacity-0 after:transition-opacity after:duration-150 after:ease-in-out after:text-blue-500 focus-visible:after:text-pink-500 hover:after:opacity-50 hover:after:text-pink-500"
          />
          <label
            htmlFor="check-3"
            className="cursor-pointer text-gray-600 transition-colors duration-150 ease-in-out hover:text-pink-500"
          >
            Checkbox 3
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="check-4"
            type="checkbox"
            className="appearance-none outline-none w-6 h-6 p-1 bg-transparent border border-gray-600 rounded grid place-content-center cursor-pointer checked:border-blue-500 focus-visible:border-pink-500 hover:border-pink-500 checked:after:opacity-100 after:content-['\2714'] after:opacity-0 after:transition-opacity after:duration-150 after:ease-in-out after:text-blue-500 focus-visible:after:text-pink-500 hover:after:opacity-50 hover:after:text-pink-500"
          />
          <label
            htmlFor="check-4"
            className="cursor-pointer text-gray-600 transition-colors duration-150 ease-in-out hover:text-pink-500"
          >
            Checkbox 4
          </label>
        </div>
      </form>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
