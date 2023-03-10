import { gusi } from "./myDate.js";
import { getBoundsYears, byField } from "../scripts/utils.js";

const boundYears = getBoundsYears(
  gusi.sort(byField("date")).sort(byField("id"))
);

export { boundYears };
