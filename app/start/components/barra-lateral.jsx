"use client";

import { montserrat } from "@/config/fonts";
import { linksComponents } from "@/data/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BarraLateral() {
  const rutaActual = usePathname();

  return (
    <div className={`${montserrat.className} pt-8 xl:pl-12 hidden xl:block `}>
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
              } text-lg font-medium transition w-[11rem] duration-150 pl-3 rounded-md py-3 dark:hover:bg-gray-700/25 hover:bg-gray-400/15 flex items-center gap-4 text-gray-800/90 dark:text-gray-300`}
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
