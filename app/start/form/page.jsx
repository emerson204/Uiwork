"use client";

import React from "react";
import ContentComponents from "../components/content-components";
import TitleHeader from "../components/title-header";
import FormUno from "./components/form-uno";
import FormDos from "./components/form-dos";
import FormTres from "./components/form-tres";
import FormCuatro from "./components/form-cuatro";
import FormCinco from "./components/form-cinco";
import FormSeis from "./components/form-seis";
import FormSiete from "./components/form-siete";
import FormOcho from "./components/form-ocho";
import FormNueve from "./components/form-nueve";
import FormDiez from "./components/form-diez";

export default function PageForm() {
  return (
    <ContentComponents>
      <TitleHeader title="Forms" subtitle={"Formularios"} />

      <div className="grid lg:grid-cols-2 gap-x-7 lg:gap-x-0 xl:gap-y-3 md:gap-y-7 gap-y-5 pb-10">
        <FormUno />
        <FormDos />
        <FormTres />
        <FormCuatro />
        <FormCinco />
        <FormSeis />
        <FormSiete />
        <FormOcho />
        <FormNueve />
        <FormDiez />
      </div>
    </ContentComponents>
  );
}
