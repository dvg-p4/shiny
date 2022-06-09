import { imageOutputBinding } from "../bindings/output/image";
import { shinySetInputValue } from "../shiny/initedMethods";
import type { Bounds } from "./createBrush";

function setBrush(
  brushId: string,
  coords: Bounds,
  panel: number,
  outputId: string
): void {
  shinySetInputValue(brushId, null);
  imageOutputBinding
    .find(document.documentElement)
    .trigger("shiny-internal:setBrush", {
      brushId: brushId,
      imgCoords: coords,
      panelIdx: panel,
      outputId: outputId,
    });
}

export { setBrush };