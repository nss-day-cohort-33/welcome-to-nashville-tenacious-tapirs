// declare variable for my search categories ID to target DOM element for my category dropdown
let searchInput = document.querySelector("#searchMeetups");

// declare variable to target DOM element of my search results div
let meetupsResultsContainer = document.querySelector("#meetupsContainer");

// target DOM element search button & add event listener for when user clicks to search events in their chosen category
document.querySelector("#searchMeetupsBtn").addEventListener("click", event => {
  meetupsResultsContainer.innerHTML = "";
  console.log(searchInput.value);

  // Call my API and insert the category id variable to return results only for that category
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?categories=${
      searchInput.value
    }&location.address=nashville&token=${eventBrite.privateKey}`
  )
    .then(events => events.json())
    .then(eventsFromAPI => {

      console.log(eventsFromAPI);

      // Iterate the API json events results and use as the parameter for the function argument that displays the results as HTML
      for (let i = 0; i <= eventsFromAPI.events.length; i++) {
        console.log(eventsFromAPI.events[i]);

        // if else statement to look for "empty" events so they are not populated in the list
        if (eventsFromAPI.events[i].name.text === "test") {
          eventsFromAPI.events[i] = "Event Unlisted";
        } else
          meetupsResultsContainer.innerHTML += meetupsResultsList(
            eventsFromAPI.events[i]
          );
      }
    });
});

