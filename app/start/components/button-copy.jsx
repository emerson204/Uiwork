import { Button } from "@/components/ui/button";
import { Copy, SquareCheckBig } from "lucide-react";
import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";

export default function ButtonCopy({ handleCopy, copyText }) {
  return (
    <>
      <Button
        onClick={handleCopy}
        variant="copy"
        className={`absolute top-2 right-2 z-20 ${
          copyText ? "bg-green-500" : ""
        }`}
      >
        {copyText ? <SquareCheckBig size={20} /> : <Copy size={20} />}
      </Button>

      <RiTailwindCssFill
        className="absolute top-4 left-4 fill-[#38BDF8] z-20"
        size={23}
      />
    </>
  );
}
