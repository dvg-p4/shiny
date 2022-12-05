import { imageOutputBinding } from "../bindings/output/image";
import { shinySetInputValue } from "../shiny/initedMethods";

function resetBrush(brushId: string): void {
  console.log("Directly sending info in resetBrush()");
  shinySetInputValue(brushId, null);
  imageOutputBinding
    .find(document.documentElement)
    .trigger("shiny-internal:brushed", {
      brushId: brushId,
      outputId: null,
    });
}

export { resetBrush };
