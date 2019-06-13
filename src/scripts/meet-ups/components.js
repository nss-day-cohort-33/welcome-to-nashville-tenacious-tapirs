const meetupsResultsList = function(eventsList) {
  return `
    <div>
<h2>Event Name: ${eventsList.name.text}</h2>
<h3>Event Description: ${eventsList.summary}</h3>
<a href="${eventsList.url}" target="_blank">Event URL</a>
<button class="meetupsResultsBtn"> Save </button>
</div>
    `;
};

// target Save button in MeetUp Results events list Event Handler or Event Bubbling
// const meetupSaveBtn = document.querySelector(".meetupsItenerary")
// meetupSaveBtn.addEventListener("click" event => {

// }
// .addEventListener("click", event =>{}
//     // meetupsResultsContainer.innerHTML = "";

//     // Display Saved event in My Itiniary
//     meetupsResultsContainer.innerHTML += meetupsResultsList(
//       eventsFromAPI.events[i]
//     );

