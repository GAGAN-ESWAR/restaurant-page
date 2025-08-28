import "./styles.css";
import { HomePage } from "./modules/home.js";
import { menuPage } from "./modules/menu.js";
import { aboutPage } from "./modules/about.js";

const content = document.querySelector("#content");

content.appendChild(HomePage());
content.appendChild(menuPage());
content.appendChild(aboutPage());
