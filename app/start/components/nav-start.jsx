"use client";

import { useState } from "react";
import { GrGithub } from "react-icons/gr";
import { ModeToggle } from "@/components/toggle-dark-mode";
import { useRouter } from "next/navigation";
import { MenuComponents } from "./menu-components";
import { Menu, X } from "lucide-react";
import BarraLateralMobile from "./menu-barra-mobile";

export default function NavStart() {
  const [menuMobile, setMenuMobile] = useState(false);

  const router = useRouter();

  const handleMenu = () => {
    setMenuMobile(!menuMobile);
  };

  return (
    <header className="max-w-[85rem] mx-auto py-4 flex justify-between items-center px-3">
      <div className="flex md:gap-14 gap-5 items-center">
        <h1
          className="text-2xl font-bold text-gray-600 dark:text-gray-300  cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span className="font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent text-4xl mr-[.2rem] tracking-wide">
            Ui
          </span>
          Work
        </h1>

        <nav className="hidden md:flex">
          <MenuComponents />
        </nav>

        <div>
          <BarraLateralMobile
            // Aca le pasamos el estado de menuMobile en isOpen que viene de props en el menu-barra-mobile , osea ese isOpen es true o false y asi podremos hacer la validacion en menu-barra-lateral para mostrar o no el menu
            isOpen={menuMobile}
            // Aca le pasamos como props el handleClose que viene hacer la funcion de onClick de la X (close) para cerrar el menu , y le pasamos como False osea el estado inicial que es opacity-0 , ese estado incial lo definimos en en el menu-barra-mobile con el isOpen
            handleClose={() => setMenuMobile(false)}
          />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {menuMobile ? (
          ""
        ) : (
          <Menu
            sixe={20}
            className="cursor-pointer md:hidden"
            strokeWidth={1}
            onClick={handleMenu}
          />
        )}

        <GrGithub size={20} className="cursor-pointer" />
        <ModeToggle />
      </div>
    </header>
  );
}
