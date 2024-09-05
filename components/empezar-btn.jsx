import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FiArrowRight } from "react-icons/fi";

export default function Empezar({ titulo, ruta, className }) {
  return (
    <Link
      href={ruta}
      className={`${buttonVariants({
        variant: "default",
      })} flex gap-2 group ${className}`}
    >
      {titulo}
      <FiArrowRight
        className="mt-[.1rem] group-hover:translate-x-1 transition"
        size={17}
      />
    </Link>
  );
}
