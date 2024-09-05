import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ContentBg from "../../components/content-bg";
import ButtonCopy from "../../components/button-copy";

export default function BotonUno() {
  const [copyText, setCopyText] = useState(false);

  const copyCode = `
      <button
        className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
      >
        <span
          className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
        >
          <span
            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
          ></span>
        </span>
        <span
          className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
        >
          <span
            className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
          ></span>
        </span>
        <span
          className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
        ></span>
        <span
          className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
          >Get Started</span
        >
      </button>
  `;

  const handleCopy = () => {
    try {
      // Aca le vas a pasar que es lo que quieres copiar
      navigator.clipboard.writeText(copyCode);

      //Luego que copiemos el texto , lo que haces es :
      // Pasar el estado a true para que se muestre otro icono de CheckCheck
      setCopyText(true);

      // Y mostramos un toast
      toast({
        title: "Copiado correctamente ✅",
      });

      // Luego para que vuelva al icono inicial hacemos un setTimeout y pasamos el estado a False
      setTimeout(() => {
        setCopyText(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentBg className="bg-white">
      <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          Get Started
        </span>
      </button>

      <ButtonCopy handleCopy={handleCopy} copyText={copyText} />
    </ContentBg>
  );
}
