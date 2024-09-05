"use client";

import React from "react";
import ContentComponents from "../components/content-components";
import TitleHeader from "../components/title-header";
import CardUno from "./components/card-uno";
import CardDos from "./components/card-dos";
import CardTres from "./components/card-tres";
import CardCuatro from "./components/card-cuatro";
import CardCinco from "./components/card-cinco";
import CardSeis from "./components/card-seis";
import CardSiete from "./components/card-siete";
import CardOcho from "./components/card-ocho";
import CardNueve from "./components/card-nueve";
import CardDiez from "./components/card-diez";
import CardOnce from "./components/card-once";
import CardDoce from "./components/card-doce";
import CardTrece from "./components/card-trece";
import CardCatorce from "./components/card-catorce";
import CardQuince from "./components/card-quince";
import CardDieciseis from "./components/card-dieciseis";
import CardDiecisiete from "./components/card-diecisiete";
import CardDieciocho from "./components/card-dieciocho";
import CardDiecinueve from "./components/card-diecinueve";
import CardVeinte from "./components/card-veinte";

export default function PageCard() {
  return (
    <ContentComponents>
      <TitleHeader title="Cards" subtitle="Cards" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-7 lg:gap-x-0 xl:gap-y-3 md:gap-y-7 gap-y-5 pb-10">
        <CardUno />
        <CardDos />
        <CardTres />
        <CardCuatro />
        <CardCinco />
        <CardSeis />
        <CardSiete />
        <CardOcho />
        <CardNueve />
        <CardDiez />
        <CardOnce />
        <CardDoce />
        <CardTrece />
        <CardCatorce />
        <CardQuince />
        <CardDieciseis />
        <CardDiecisiete />
        <CardDieciocho />
        <CardDiecinueve />
        <CardVeinte />
      </div>
    </ContentComponents>
  );
}
