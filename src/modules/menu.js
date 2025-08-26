import jamoon from "../../images/baadhusha.jpg";
import carrotHalwa from "../../images/carrotHalwa.jpg";
import chai from "../../images/chai.jpg";
import chickenBiriyani from "../../images/chickenBiriyani.jpg";
import chickenLegBiriyani from "../../images/chickenLegBiriyani.jpg";
import fish from "../../images/fish.jpg";
import muttonKulcha from "../../images/muttonKulcha.jpg";
import noodles from "../../images/noodles.jpg";
import riceVegCurry from "../../images/riceVegCurry.jpg";

import "../cssModules/menu.css";

function item(str,text){
    const item = document.createElement("div");
    item.classList.add("item");

    const image = document.createElement("img");
    image.src = str;
    image.classList.add("itemImg");

    const itemName = document.createElement("div");
    itemName.textContent = text;
    itemName.classList.add("itemName");

    item.appendChild(image);
    item.appendChild(itemName);

    return item;
}

const menuItems = [
    {img: chai, name: "CHAI"},
    {img: jamoon, name: "JAMUN"},
    {img: carrotHalwa, name: "CARROT HALWA"},
    {img: chickenBiriyani, name: "CHICKEN BIRIYANI"},
    {img: chickenLegBiriyani, name: "CHICKEN LEG BIRIYANI"},
    {img: fish, name: "FISH"},
    {img: muttonKulcha, name: "MUTTON KULCHA"},
    {img: noodles, name: "NOODLES"},
    {img: riceVegCurry, name: "RICE AND VEG CURRY"},
]

function menuPage(){
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-container");

    menuItems.forEach(menuItem =>{
        const itemDiv = item(menuItem.img,menuItem.name);
        menuContent.appendChild(itemDiv);
    })

    return menuContent;
}

export {menuPage};