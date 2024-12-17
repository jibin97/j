// Main JavaScript file
import { initNavigation, setActiveNavigation } from "./navigation.js";
import { initAnimations } from "./animations.js";
import { initForms } from "./forms.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initAnimations();
  initForms();
  setActiveNavigation();
});
