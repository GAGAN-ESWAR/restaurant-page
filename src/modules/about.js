import "../cssModules/about.css"

function aboutPage(){
    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about-container");

    // time div
    const hours = document.createElement("div");
    hours.classList.add("time");

    const hoursHeader = document.createElement("div");
    hoursHeader.classList.add("hoursHeader");
    hoursHeader.textContent = "HOURS";

    const hoursContent = document.createElement("div");
    hoursContent.classList.add("hoursContent");
    hoursContent.innerHTML = `
    Sunday: 8am - 8pm <br>
    Monday: 6am - 6pm <br>
    Tuesday: 6am - 6pm <br>
    Wednesday: 6am - 6pm <br>
    Thursday: 6am - 10pm <br>
    Friday: 6am - 10pm <br>
    Saturday: 8am - 10pm
`;

    hours.appendChild(hoursHeader);
    hours.appendChild(hoursContent);

    
    // location div 
    const location = document.createElement("div");
    location.classList.add("location");

    const locationHeader = document.createElement("div");
    locationHeader.classList.add("locationHeader");
    locationHeader.textContent = "LOCATION";

    const locationContent = document.createElement("div");
    locationContent.classList.add("locationContent");
    locationContent.innerHTML = `123 Forest Drive, Forestville, Maine`;
    
    location.appendChild(locationHeader);
    location.appendChild(locationContent);


    // contact div
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactHeader= document.createElement("div");
    contactHeader.classList.add("contactHeader");
    contactHeader.textContent="CONTACT";

    const contactContent=document.createElement("div");
    contactContent.classList.add("contactContent");
    contactContent.innerHTML =`
    Manager <br>
    555-555-5555 <br>
    perfectlyRealEmail@notFake.com
    `;

    contact.appendChild(contactHeader);
    contact.appendChild(contactContent);
    
    aboutContent.appendChild(hours);
    aboutContent.appendChild(location);
    aboutContent.appendChild(contact);

    return aboutContent;
}

export {aboutPage};