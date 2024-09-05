"use client";

import ContentComponents from "../components/content-components";
import TitleHeader from "../components/title-header";
import ToggleCatorce from "./components/toggle-catorce";
import ToggleCinco from "./components/toggle-cinco";
import ToggleCuatro from "./components/toggle-cuatro";
import ToggleDieciocho from "./components/toggle-dieciocho";
import ToggleDieciseis from "./components/toggle-dieciseis";
import ToggleDiecisiete from "./components/toggle-diecisiete";
import ToggleDiez from "./components/toggle-diez";
import ToggleDoce from "./components/toggle-doce";
import ToggleDos from "./components/toggle-dos";
import ToggleNueve from "./components/toggle-nueve";
import ToggleOcho from "./components/toggle-ocho";
import ToggleOnce from "./components/toggle-once";
import ToggleQuince from "./components/toggle-quince";
import ToggleSeis from "./components/toggle-seis";
import ToggleSiete from "./components/toggle-siete";
import ToggleTrece from "./components/toggle-trece";
import ToggleTres from "./components/toggle-tres";
import ToggleUno from "./components/toggle-uno";

export default function PageToggles() {
  return (
    <ContentComponents>
      <TitleHeader title="Toggles" subtitle="Toggles" />

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-7 lg:gap-x-0 xl:gap-y-3 md:gap-y-7 gap-y-5 pb-10">
        <ToggleUno />
        <ToggleDos />
        <ToggleTres />
        <ToggleCuatro />
        <ToggleCinco />
        <ToggleSeis />
        <ToggleSiete />
        <ToggleOcho />
        <ToggleNueve />
        <ToggleDiez />
        <ToggleOnce />
        <ToggleDoce />
        <ToggleTrece />
        <ToggleCatorce />
        <ToggleQuince />
        <ToggleDieciseis />
        <ToggleDiecisiete />
        <ToggleDieciocho />
      </div>
    </ContentComponents>
  );
}
