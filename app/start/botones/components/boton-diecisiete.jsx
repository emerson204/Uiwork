import React, { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function BotonDiecisiete() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
   <div className="group relative">
  <button>
    <svg
      className="w-12 hover:scale-125 duration-200 hover:stroke-blue-500"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="100px"
      viewBox="0 -960 960 960"
      height="100px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M840.33-518.67v332q0 27-19.83 46.84Q800.67-120 773.67-120H186.33q-27 0-46.83-19.83-19.83-19.84-19.83-46.84v-332q-26.34-23-36.5-57.33-10.17-34.33 1.16-70.67L127-782q8-26.67 28.17-42.33Q175.33-840 201.67-840h554q27.66 0 48.33 15.83 20.67 15.84 29 42.17l43.33 135.33q11.34 36.34.84 70.34t-36.84 57.66Zm-270.66-34.66q28.33 0 46.33-18.84 18-18.83 14.33-44.5l-24-156.66h-92.66V-614q0 24.33 16 42.5t40 18.17Zm-184.67 0q26.33 0 44.17-17.84Q447-589 447-614v-159.33h-92.67l-24 156.66q-4 25.34 12.84 44.34 16.83 19 41.83 19Zm-180.67 0q22 0 38.17-15.34 16.17-15.33 19.17-38l24.66-166.66h-92.66l-44 142q-8.67 27.33 7.5 52.66 16.16 25.34 47.16 25.34Zm551.34 0q31 0 47.66-25 16.67-25 7.67-53l-44.67-142h-92L699-606.67q3 22.67 19.17 38 16.16 15.34 37.5 15.34ZM186.33-186.67h587.34V-488q-1 1.33-6.5 1.33h-11.5q-25.67 0-47.5-10-21.84-10-43.17-31.33-16.67 19.33-40.33 30.33-23.67 11-51.67 11-29 0-51.17-9-22.16-9-41.5-28.33-15.66 18-38.5 27.67-22.83 9.66-50.83 9.66-30.33 0-54.17-10.66Q313-508 295.67-528q-23 21-45.17 31.17-22.17 10.16-46.17 10.16h-10.5q-5.16 0-7.5-1.33v301.33Zm587.34 0H186.33h587.34Z"
      ></path>
    </svg>
    </button>
    <span
      className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
      >STORE<span> </span
    ></span>
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
      <div className="group relative">
        <button>
          <svg
            className="w-12 hover:scale-125 duration-200 hover:stroke-blue-500"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="100px"
            viewBox="0 -960 960 960"
            height="100px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M840.33-518.67v332q0 27-19.83 46.84Q800.67-120 773.67-120H186.33q-27 0-46.83-19.83-19.83-19.84-19.83-46.84v-332q-26.34-23-36.5-57.33-10.17-34.33 1.16-70.67L127-782q8-26.67 28.17-42.33Q175.33-840 201.67-840h554q27.66 0 48.33 15.83 20.67 15.84 29 42.17l43.33 135.33q11.34 36.34.84 70.34t-36.84 57.66Zm-270.66-34.66q28.33 0 46.33-18.84 18-18.83 14.33-44.5l-24-156.66h-92.66V-614q0 24.33 16 42.5t40 18.17Zm-184.67 0q26.33 0 44.17-17.84Q447-589 447-614v-159.33h-92.67l-24 156.66q-4 25.34 12.84 44.34 16.83 19 41.83 19Zm-180.67 0q22 0 38.17-15.34 16.17-15.33 19.17-38l24.66-166.66h-92.66l-44 142q-8.67 27.33 7.5 52.66 16.16 25.34 47.16 25.34Zm551.34 0q31 0 47.66-25 16.67-25 7.67-53l-44.67-142h-92L699-606.67q3 22.67 19.17 38 16.16 15.34 37.5 15.34ZM186.33-186.67h587.34V-488q-1 1.33-6.5 1.33h-11.5q-25.67 0-47.5-10-21.84-10-43.17-31.33-16.67 19.33-40.33 30.33-23.67 11-51.67 11-29 0-51.17-9-22.16-9-41.5-28.33-15.66 18-38.5 27.67-22.83 9.66-50.83 9.66-30.33 0-54.17-10.66Q313-508 295.67-528q-23 21-45.17 31.17-22.17 10.16-46.17 10.16h-10.5q-5.16 0-7.5-1.33v301.33Zm587.34 0H186.33h587.34Z"></path>
          </svg>
        </button>
        <span className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white text-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          STORE<span> </span>
        </span>
      </div>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
