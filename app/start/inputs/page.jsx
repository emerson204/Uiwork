"use client";

import React from "react";
import TitleHeader from "../components/title-header";
import ContentComponents from "../components/content-components";
import InputUno from "./components/input-uno";
import InputDos from "./components/input-dos";
import InputTres from "./components/input-tres";
import InputCuatro from "./components/input-cuatro";
import InputCinco from "./components/input-cinco";
import InputSeis from "./components/input-seis";
import InputSiete from "./components/input-siete";
import InputOcho from "./components/input-ocho";
import InputNueve from "./components/input-nueve";
import InputDiez from "./components/input-diez";
import InputOnce from "./components/input-once";
import InputDoce from "./components/input-doce";
import InputTrece from "./components/input-trece";
import InputCatorce from "./components/input-catorce";
import InputQuince from "./components/input-quince";
import InputDieciseis from "./components/input-dieciseis";

export default function PageInputs() {
  return (
    <ContentComponents>
      <TitleHeader title="Inputs" subtitle="Inputs" />

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-7 lg:gap-x-0 xl:gap-y-3 md:gap-y-7 gap-y-5 pb-10">
        <InputUno />
        <InputDos />
        <InputTres />
        <InputCuatro />
        <InputCinco />
        <InputSeis />
        <InputSiete />
        <InputOcho />
        <InputNueve />
        <InputDiez />
        <InputOnce />
        <InputDoce />
        <InputTrece />
        <InputCatorce />
        <InputQuince />
        <InputDieciseis />
      </div>
    </ContentComponents>
  );
}
