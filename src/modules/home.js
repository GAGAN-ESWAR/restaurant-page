import restImg from "../../images/home.jpg"
import restImg2 from "../../images/restaurant.jpg"
import "../cssModules/home.css"

function HomePage(){
    const HomeContent = document.createElement("div");
    HomeContent.classList.add("home-container");

    const image = document.createElement("img");
    image.src = restImg;
    image.classList.add("home-image");

    const homeText = document.createElement("div");
    homeText.classList.add("home-text");

    const headerHome = document.createElement("div");
    headerHome.classList.add("home-header");
    headerHome.textContent = "Spicewood";

    const descHome = document.createElement("p");
    descHome.classList.add("home-desc")
    descHome.textContent = "Our restaurant is the perfect blend of taste, comfort, and hospitality. Every dish is crafted with fresh, high-quality ingredients, bringing out rich flavors that leave our guests wanting more. From a warm and inviting ambiance to attentive service, we ensure that every visit is a memorable experience. Whether you’re here for a family gathering, a casual outing, or a special occasion, our restaurant promises delicious food, a welcoming atmosphere, and an experience that feels just like home."

    homeText.appendChild(headerHome);
    homeText.appendChild(descHome);

    const image2 = document.createElement("img");
    image2.src = restImg2;
    image2.classList.add("restaurant-image");

    HomeContent.appendChild(image);
    HomeContent.appendChild(homeText);
    HomeContent.appendChild(image2);

    return HomeContent;
}

export {HomePage};