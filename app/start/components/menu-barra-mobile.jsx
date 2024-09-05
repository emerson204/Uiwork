"use client";

import { montserrat } from "@/config/fonts";
import { linksComponents } from "@/data/nav-links";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BarraLateralMobile({ isOpen, handleClose }) {
  const rutaActual = usePathname();

  return (
    <div
      className={`${
        montserrat.className
      } pt-10 md:hidden block absolute md:bg-transparent bg-gray-300 dark:bg-black dark:md:bg-transparent z-30 inset-y-0 left-0 w-[78%] pl-9 transition duration-300 ${
        //Aca por ejm recibimos isOpen , recuerda que isOpen es el estado que viene de nav-menu y es true o false , aca definimos el estado inicial del Menu y que se va hacer aparecer o desaparecer
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full flex justify-end mb-5 pr-10">
        {/*Aca hacemos el onClick en la X , esa funcion de handleClose la pasamos como props en nav-start cuando llamamos este componente y recuerda que le pasamos False (si gustas velo en nav-start) es porque aca arribita el isOpen el false cae el opacity-0 osea el estado inicial , asi que cuando demos click en la X sera False y se ocultara el Menu*/}
        <X size={30} strokeWidth="1" onClick={handleClose} />
      </div>
      <h2 className="font-semibold text-2xl mb-4">Componentes</h2>

      <ul>
        {linksComponents.map((link) => (
          <li key={link.id} className="mb-1">
            <Link
              href={link.href}
              className={`${
                link.href === rutaActual
                  ? "bg-gray-400/15 dark:bg-gray-700/25 "
                  : ""
              } text-lg font-medium transition w-[13rem] duration-150 pl-3 rounded-md py-3 dark:hover:bg-gray-700/25 hover:bg-gray-400/15 flex items-center gap-4 text-gray-800/90 dark:text-gray-300`}
              onClick={handleClose}
            >
              {link.icono}
              {link.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
