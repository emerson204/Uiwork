import { montserrat } from "@/config/fonts";
import { motion } from "framer-motion";
import Empezar from "./empezar-btn";

export default function Hero() {
  return (
    <section className="lg:h-[65vh] flex pt-14 lg:pt-10 justify-center items-center flex-col relative px-3 lg:px-0">
      <motion.h2
        className={`${montserrat.className} box lg:text-7xl md:text-5xl text-4xl text-center font-extrabold lg:p-8 max-w-[90%]`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Diseños Únicos para{" "}
        <span className="bg-gradient-to-r  from-cyan-500 via-sky-400 to-sky-300 bg-clip-text text-transparent">
          {" "}
          React{" "}
        </span>
        con{" "}
        <span className="bg-gradient-to-r from-teal-700 via-teal-500 to-emerald-300 bg-clip-text text-transparent">
          Tailwind
        </span>{" "}
        CSS
      </motion.h2>

      <motion.p
        className={`${montserrat.className} text-center lg:pt-2 lg:pb-9 py-7 md:text-lg lg:text-[1.2rem] leading-7 box md:leading-8 lg:max-w-[58%] md:max-w-[80%] mx-auto text-[#9a9a9a] font-medium `}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Explora una colección versátil de
        <span className="dark:text-white text-slate-900">
          {" "}
          componentes para React con Tailwind CSS
        </span>{" "}
        . Encuentra botones, inputs y más, con vistas previas interactivas y
        código listo para copiar
      </motion.p>

      <motion.div
        className="box"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
      >
        <Empezar titulo="Empezar" ruta="/start/botones" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="lg:absolute lg:w-[4rem] lg:h-[4rem] lg:rounded-full bg-slate-500 dark:lg:bg-slate-900 lg:bottom-16 lg:left-64 -z-10"></div>
        <div className="lg:absolute lg:w-[2rem] lg:h-[2rem] lg:rounded-full bg-green-300 dark:lg:bg-white lg:bottom-48 lg:left-44 -z-10"></div>
        <div className="lg:absolute lg:w-[3rem] lg:h-[3rem] lg:rounded-full bg-green-300 dark:lg:bg-white lg:bottom-0 lg:right-[25%] -z-10"></div>
        <div className="lg:absolute lg:w-[1.5rem] lg:h-[1.5rem] lg:rounded-full bg-green-300 dark:lg:bg-white lg:top-52 lg:right-[68%] -z-10"></div>
        <div className="lg:absolute lg:w-[4rem] lg:h-[4rem] lg:rounded-full bg-slate-500 dark:lg:bg-slate-900  lg:top-60 lg:right-64 -z-10"></div>
      </motion.div>
    </section>
  );
}
