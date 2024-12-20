import { vendors } from "./functions/vendor.js";
import { listener } from "./functions/listener.js";

document.addEventListener('DOMContentLoaded', () => {
  vendors();
  listener();
})