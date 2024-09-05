import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ContentBgWidth from "../../components/content-bg-width";
import ButtonCopy from "../../components/button-copy";

export default function CardQuince() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
   <div
        role="alert"
        className="mx-auto max-w-lg rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div className="flex items-center gap-4">
          <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>

          <p className="font-medium sm:text-lg text-emerald-600">
            New notification!
          </p>
        </div>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore?
        </p>

        <div className="mt-6 sm:flex sm:gap-4">
          <a
            href="#"
            className="inline-block w-full rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
          >
            View
          </a>

          <a
            href="#"
            className="mt-2 inline-block w-full rounded-lg bg-stone-300 px-5 py-3 text-center text-sm font-semibold text-gray-800 sm:mt-0 sm:w-auto"
          >
            Dismiss
          </a>
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
    <ContentBgWidth className="bg-white">
      <div
        role="alert"
        className="mx-auto max-w-lg w-[22rem] mt-7 rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div className="flex items-center gap-4">
          <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>

          <p className="font-medium sm:text-lg text-emerald-600">
            New notification!
          </p>
        </div>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore?
        </p>

        <div className="mt-6 sm:flex sm:gap-4">
          <a
            href="#"
            className="inline-block w-full rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
          >
            View
          </a>

          <a
            href="#"
            className="mt-2 inline-block w-full rounded-lg bg-stone-300 px-5 py-3 text-center text-sm font-semibold text-gray-800 sm:mt-0 sm:w-auto"
          >
            Dismiss
          </a>
        </div>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBgWidth>
  );
}
