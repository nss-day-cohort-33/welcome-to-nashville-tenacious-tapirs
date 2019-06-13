const meetupsResultsList = function(eventsList, index) {
    // In order to be able to target the button and add the click event listener and target the h2 to be injected
    // as HTML into the Itinerary container we need to add a new parameter ${} which will add a number to the
    // element IDs.
  return `
    <div >

        <h2 id="results-${index}">Event Name: ${eventsList.name.text}</h2>
        <h3>Event Description: ${eventsList.summary}</h3>
        <a href="${eventsList.url}" target="_blank">Event URL</a>
        <button class="saveBtn" id="meetupsResultsBtn-${index}"> Save </button>
    </div>
    `
};


// Define a function that will hold one argument. The function will select the Itinerary DOM Container
// to have html inserted into it when the Save button is clicked.
// The Itinerary DOM element html will = the html of the selected DOM element from the results HTML string
const AddMeetupToItinerary = function(element) {
    console.log("function being called", element)
    document.querySelector("#meetupsItenerary").innerHTML = element.innerHTML
}





