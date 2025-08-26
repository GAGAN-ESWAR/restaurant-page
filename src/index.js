import "./styles.css";
import { HomePage } from "./modules/home.js";
import { menuPage } from "./modules/menu.js";

const content = document.querySelector("#content");

// content.appendChild(HomePage());
content.appendChild(menuPage());
