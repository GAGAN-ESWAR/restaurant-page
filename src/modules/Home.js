import restImg from "../../images/home.jpg"

function HomePage(){
    const HomeContent = document.createElement("div");

    const image = document.createElement("img");
    image.src = restImg;
    image.style.width = "30vw";

    const headerHome = document.createElement("div");
    headerHome.textContent = "Timber & Taste";
    headerHome.style.fontWeight= "700";
    headerHome.style.fontSize = "3rem";

    const descHome = document.createElement("p");
    descHome.textContent = "Our restaurant is the perfect blend of taste, comfort, and hospitality. Every dish is crafted with fresh, high-quality ingredients, bringing out rich flavors that leave our guests wanting more. From a warm and inviting ambiance to attentive service, we ensure that every visit is a memorable experience. Whether you’re here for a family gathering, a casual outing, or a special occasion, our restaurant promises delicious food, a welcoming atmosphere, and an experience that feels just like home."

    HomeContent.appendChild(image);
    HomeContent.appendChild(headerHome);
    HomeContent.appendChild(descHome);

    return HomeContent;
}

export {HomePage};