import { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function CheckboxSeis() {
  const [copyText, setCopyText] = useState(false);
  const copyCode = `
    <label
        className="relative text-[#008080] flex cursor-pointer items-center justify-center gap-[1em]"
        htmlFor="tick"
      >
        <input
          className="peer appearance-none"
          id="tick"
          name="tick"
          type="checkbox"
        />
        <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
        <svg
          viewBox="0 0 69 89"
          className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [strokeDasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
          fill="none"
          height="89"
          width="69"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
            strokeWidth="6px"
            stroke="#008080"
            pathLength="100"
          ></path>
        </svg>

        <p className="text-[1em] font-bold [user-select:none]">
          Stare at Your Crush
        </p>
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
        className="relative text-[#008080] flex cursor-pointer items-center justify-center gap-[1em]"
        htmlFor="tick"
      >
        <input
          className="peer appearance-none"
          id="tick"
          name="tick"
          type="checkbox"
        />
        <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
        <svg
          viewBox="0 0 69 89"
          className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [strokeDasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
          fill="none"
          height="89"
          width="69"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
            strokeWidth="6px"
            stroke="#008080"
            pathLength="100"
          ></path>
        </svg>

        <p className="text-[1em] font-bold [user-select:none]">
          Stare at Your Crush
        </p>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
