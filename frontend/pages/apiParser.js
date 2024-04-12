//event list is the list you want to append to
//type is | event | project | workshop
export function apiFetch (eventList, type){
    //index --> value
    //key  --> value
    const template = `http://localhost:3000/api/fetch/events` // ?type=${type}
    fetch(template)
        .then(response => response.json())
        .then(jsonData => {
            // Loop through each event in the JSON data and append to the ul element
            console.log(jsonData);
            jsonData.message.forEach(event => {
                const template = `
                <li class="${type}Element">
                    <div class="${type}InfoBox">
                        <p class="${type}Name">
                            <strong>${event.name}</strong>
                        </p>
                        <p class="${type}Date">
                            <strong>${event.date}</strong>
                        </p>
                        <p class="${type}Description">
                            <strong>Description:</strong>
                            "${event.description}"
                        </p>
                    </div>
                    <img class="${type}Image" src="http://localhost:3000/api/fetch/images/${event.imageName}">
                </li>`;
                eventList.insertAdjacentHTML("beforeend",template);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
}