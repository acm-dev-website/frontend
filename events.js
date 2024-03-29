// Function to create HTML elements for each event
function createEventElement(event) {
    // Create list element and assign eventElement class to it
    const li = document.createElement("li");
    li.classList.add("eventElement");
            
    // Create eventInfoBox div
    const divInfoBox = document.createElement("div");
    divInfoBox.classList.add("eventInfoBox");

    // Iterate through event properties and create <p> elements
    for (const prop in event) {
        if (event[prop]) {
            const p = document.createElement("p");
            const propName = prop.charAt(0).toUpperCase() + prop.slice(1);
            const className = `event${propName}`;

            // Check the class name and adjust inner HTML accordingly
            if (className === "eventName" || className === "eventDate") {
                p.classList.add(className);
                p.innerHTML = `<strong>${event[prop]}</strong>`;
            }
            else if (className === "eventHosts" || className === "eventDescription" || className === "eventType") {
                p.classList.add(className);
                p.innerHTML = `<strong>${propName}:</strong> ${event[prop]}`;
            }
            // Append formatted HTML to eventInfoBox
            divInfoBox.appendChild(p);
        }
    }

    // Append the eventInfoBox to the eventElement
    li.appendChild(divInfoBox);
            
    // Identify if an image was provided and append it to the eventElement
    if (event.img) {
        const img = document.createElement("img");
        img.classList.add("eventImage");
        img.src = `Graphics/${event.img}`;
        li.appendChild(img);
    }
            
    // Return completed li element
    return li;
}

// Get the ul element to append event elements
const ucEventList = document.getElementById("ucEventList");
const pastEventList = document.getElementById("pastEventList");

// Fetch JSON data from the external file
fetch('testEventList.json')
    .then(response => response.json())
    .then(jsonData => {
        // Loop through each event in the JSON data and append to the ul element
        jsonData.message.forEach(event => {
            const eventElement1 = createEventElement(event);
            const eventElement2 = createEventElement(event);
            ucEventList.appendChild(eventElement1);
            pastEventList.appendChild(eventElement2);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));