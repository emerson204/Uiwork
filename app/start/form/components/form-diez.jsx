import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";
import ContentForms from "../../components/content-forms";

export default function FormDiez() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
     <div className="w-80 rounded-2xl bg-white">
        <div className="flex flex-col gap-2 p-8">
          <input
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100"
          />
          <label className="flex cursor-pointer items-center justify-between p-1">
            Accept terms of use
            <div className="relative inline-block">
              <input
                type="checkbox"
                className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              />
              <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
            </div>
          </label>
          <label className="flex cursor-pointer items-center justify-between p-1">
            Submit to newsletter
            <div className="relative inline-block">
              <input
                type="checkbox"
                className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              />
              <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
            </div>
          </label>
          <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
            Save
          </button>
        </div>
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
    <ContentForms className="bg-[#212121]">
      <div className="w-80 rounded-2xl bg-white">
        <div className="flex flex-col gap-2 p-8">
          <input
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100 text-black"
          />
          <label className="flex cursor-pointer items-center justify-between p-1 text-black">
            Accept terms of use
            <div className="relative inline-block">
              <input
                type="checkbox"
                className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              />
              <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
            </div>
          </label>
          <label className="flex cursor-pointer items-center justify-between p-1 text-black">
            Submit to newsletter
            <div className="relative inline-block">
              <input
                type="checkbox"
                className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              />
              <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
            </div>
          </label>
          <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
            Save
          </button>
        </div>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentForms>
  );
}
