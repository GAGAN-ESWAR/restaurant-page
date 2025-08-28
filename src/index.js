import "./styles.css";
import { HomePage } from "./modules/home.js";
import { menuPage } from "./modules/menu.js";
import { aboutPage } from "./modules/about.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

// put buttons in an array for easier handling
const navButtons = [homeBtn, menuBtn, aboutBtn];

// helper: reset all button colors
function resetColors() {
  navButtons.forEach(btn => (btn.style.color = "white"));
}

// helper: show a page and activate its button
function showPage(pageFn, activeBtn) {
  content.innerHTML = "";
  content.appendChild(pageFn());
  resetColors();
  activeBtn.style.color = "#7B4019";
}

homeBtn.addEventListener("click", () => showPage(HomePage, homeBtn));
menuBtn.addEventListener("click", () => showPage(menuPage, menuBtn));
aboutBtn.addEventListener("click", () => showPage(aboutPage, aboutBtn));

// load home by default
showPage(HomePage, homeBtn);
