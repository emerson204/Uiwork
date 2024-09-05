"use client";

import { GrGithub } from "react-icons/gr";
import { ModeToggle } from "./toggle-dark-mode";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Empezar from "./empezar-btn";

export default function Navbar() {
  const router = useRouter();

  return (
    <motion.header
      className="max-w-[85rem] mx-auto py-4 flex justify-between items-center px-3"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1
        className="text-2xl font-bold text-gray-600 dark:text-gray-300  cursor-pointer"
        onClick={() => router.push("/")}
      >
        <span className="font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent text-4xl mr-[.2rem] tracking-wide">
          Ui
        </span>
        Work
      </h1>

      <div className="flex gap-4 items-center">
        <GrGithub
          size={20}
          className="cursor-pointer"
          onClick={() => router.push("https://github.com/emerson204/Uiwork")}
        />

        <ModeToggle />

        <Empezar titulo="Empezar" ruta="/start/botones" />
      </div>
    </motion.header>
  );
}
