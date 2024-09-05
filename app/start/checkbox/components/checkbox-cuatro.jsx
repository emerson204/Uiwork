import { useState } from "react";
import ContentBg from "../../components/content-bg";
import { toast } from "@/components/ui/use-toast";
import ButtonCopy from "../../components/button-copy";

export default function CheckboxCuatro() {
  const [copyText, setCopyText] = useState(false);
  const copyCode = `
    <label
        className="relative text-[#FF91AF] flex cursor-pointer items-center justify-center gap-[1em]"
        htmlFor="heart"
      >
        <input
          className="peer appearance-none"
          id="heart"
          name="heart"
          type="checkbox"
        />
        <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#FF91AF]"></span>
        <svg
          className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [strokeDasharray:1000] [stroke-dashoffset:1000] peer-checked:[stroke-dashoffset:0]"
          viewBox="0 0 68 87"
          fill="transparent"
          height="87"
          width="68"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.048 74.752c-.74 0-3.428.03-3.674-.175-3.975-3.298-10.07-11.632-12.946-15.92C7.694 53.09 5.626 48.133 3.38 42.035 1.937 38.12 1.116 35.298.93 31.012c-.132-3.034-.706-7.866 0-10.847C2.705 12.67 8.24 7.044 15.801 7.044c1.7 0 3.087-.295 4.55.875 4.579 3.663 5.515 8.992 7.172 14.171.142.443 3.268 6.531 2.1 7.698-.362.363-1.161-10.623-1.05-12.071.26-3.37 1.654-5.522 3.15-8.398 3.226-6.205 7.617-7.873 14.52-7.873 2.861 0 5.343-.274 8.049 1.224 16.654 9.22 14.572 23.568 5.773 37.966-1.793 2.934-3.269 6.477-5.598 9.097-1.73 1.947-4.085 3.36-5.774 5.424-2.096 2.562-3.286 5.29-5.598 7.698-4.797 4.997-9.56 10.065-14.522 14.872-1.64 1.588-10.194 6.916-10.672 7.873-.609 1.217 2.76-.195 4.024-.7"
            strokeWidth="4px"
            pathLength="1000"
            stroke="#FF91AF"
          ></path>
        </svg>

        <p className="text-[1em] font-semibold [user-select:none]">
          Be loved by others
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
    <ContentBg className="bg-[#FFEFD5]">
      <label
        className="relative text-[#FF91AF] flex cursor-pointer items-center justify-center gap-[1em]"
        htmlFor="heart"
      >
        <input
          className="peer appearance-none"
          id="heart"
          name="heart"
          type="checkbox"
        />
        <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#FF91AF]"></span>
        <svg
          className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [strokeDasharray:1000] [stroke-dashoffset:1000] peer-checked:[stroke-dashoffset:0]"
          viewBox="0 0 68 87"
          fill="transparent"
          height="87"
          width="68"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.048 74.752c-.74 0-3.428.03-3.674-.175-3.975-3.298-10.07-11.632-12.946-15.92C7.694 53.09 5.626 48.133 3.38 42.035 1.937 38.12 1.116 35.298.93 31.012c-.132-3.034-.706-7.866 0-10.847C2.705 12.67 8.24 7.044 15.801 7.044c1.7 0 3.087-.295 4.55.875 4.579 3.663 5.515 8.992 7.172 14.171.142.443 3.268 6.531 2.1 7.698-.362.363-1.161-10.623-1.05-12.071.26-3.37 1.654-5.522 3.15-8.398 3.226-6.205 7.617-7.873 14.52-7.873 2.861 0 5.343-.274 8.049 1.224 16.654 9.22 14.572 23.568 5.773 37.966-1.793 2.934-3.269 6.477-5.598 9.097-1.73 1.947-4.085 3.36-5.774 5.424-2.096 2.562-3.286 5.29-5.598 7.698-4.797 4.997-9.56 10.065-14.522 14.872-1.64 1.588-10.194 6.916-10.672 7.873-.609 1.217 2.76-.195 4.024-.7"
            strokeWidth="4px"
            pathLength="1000"
            stroke="#FF91AF"
          ></path>
        </svg>

        <p className="text-[1em] font-semibold [user-select:none]">
          Be loved by others
        </p>
      </label>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
