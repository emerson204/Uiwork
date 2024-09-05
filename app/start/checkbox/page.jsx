"use client";

import React from "react";
import TitleHeader from "../components/title-header";
import ContentComponents from "../components/content-components";
import CheckboxUno from "./components/checkbox-uno";
import CheckboxDos from "./components/checkbox-dos";
import CheckboxTres from "./components/checkbox-tres";
import CheckboxCuatro from "./components/checkbox-cuatro";
import CheckboxCinco from "./components/checkbox-cinco";
import CheckboxSeis from "./components/checkbox-seis";
import CheckboxSiete from "./components/checkbox-siete";
import CheckboxOcho from "./components/checkbox-ocho";
import CheckboxNueve from "./components/checkbox-nueve";
import CheckboxDiez from "./components/checkbox-diez";
import CheckboxOnce from "./components/checkbox-once";

export default function PageCheckbox() {
  return (
    <ContentComponents>
      <TitleHeader title="Checkbox" subtitle="Checkboxs" />

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-7 lg:gap-x-0 xl:gap-y-3 md:gap-y-7 gap-y-5 pb-10">
        <CheckboxUno />
        <CheckboxDos />
        <CheckboxTres />
        <CheckboxCuatro />
        <CheckboxCinco />
        <CheckboxSeis />
        <CheckboxSiete />
        <CheckboxOcho />
        <CheckboxNueve />
        <CheckboxDiez />
        <CheckboxOnce />
      </div>
    </ContentComponents>
  );
}
