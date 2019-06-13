// declare variable for my search categories ID to target DOM element for my category dropdown
let searchInput = document.querySelector("#searchMeetups");

// declare variable to target DOM element of my search results div
let meetupsResultsContainer = document.querySelector("#searchResultsDiv");

// target DOM element search button & add event listener for when user clicks to search events in their chosen category
document.querySelector("#searchMeetupsBtn").addEventListener("click", event => {
  meetupsResultsContainer.innerHTML = "";
  console.log(searchInput.value);

  // Call my API and insert the category id variable to return results only for that category
//  function getMeetupEvent() {
  fetch(`https://www.eventbriteapi.com/v3/events/search/?categories=${searchInput.value}&location.address=nashville&token=${eventBrite.privateKey}`)
    .then(events => events.json())
// function getMeetUps ( )
// getMeetupEvent (searchInput.value)
.then(eventsFromAPI => {

      console.log(eventsFromAPI);

      // Iterate the API json events results and use as the parameter for the function argument that displays the results as HTML
      for (let i = 0; i < eventsFromAPI.events.length; i++) {
        console.log(eventsFromAPI.events[i]);

        // if else statement to look for "empty" events so they are not populated in the list
        if (eventsFromAPI.events[i].name.text === "test") {
          eventsFromAPI.events[i].name.text = "Event Unlisted";
        }
        // This connects where I want my results to be displayed with the function that generates the string of HTML
        // the paramter being passed into the "Results" function is the results of the API fetch call loop
        meetupsResultsContainer.innerHTML += meetupsResultsList(eventsFromAPI.events[i], i);
      }

    // Declare a variable to select the class .saveBtn that is attached to the button element in the Results div.
    //  Loop through the class .saveBtn and add it to each of the results populated in the results container.
     const saveButtons = document.querySelectorAll(".saveBtn")
     for (let i = 0; i < saveButtons.length; i++) {
         console.log(saveButtons[i])

        //  Add a click event listener to each newly generated save button
         saveButtons[i].addEventListener("click", (event) => {
             console.log("button got clicked", event.target.id)
            //  call the function defined on components.js and pass the argument that will target the
            // id #results that was added to the H2 tag of the html string.
            // The event.target.id.split means that we want to split off the ${} and add it to the #results of the h2 tag
            AddMeetupToItinerary(document.querySelector(`#results-${event.target.id.split("-")[1]}`))
         })
     }
    });
});



