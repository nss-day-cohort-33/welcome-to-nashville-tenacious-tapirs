// console.log("working");

// function getConcerts() {
//     return fetch(
//   `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${concertsAppKeys.appKey}`
// )
//   .then(concerts => concerts.json())
//   .then(parsedConcerts => {
//     console.log(parsedConcerts._embedded.events);
//   });
// }

// let concerts = getConcerts()

// console.log(concerts)

function getApiConcert(genre) {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
      concertsAppKeys.appKey
    }&classificationName=${genre}`
  ).then(concertFromApi => concertFromApi.json());
}

function addApiData(concertItem) {
  getApiConcert(concertItem).then(concertArr => {
    console.log(concertArr);
    let searchResults = `
<ol>
<li>${concertArr._embedded.events[0].name}: ${
      concertArr._embedded.events[0]._embedded.venues.name
    } <button id="addConcertsBtn">Add</button></li>
<li>${concertArr._embedded.events[1].name}: ${
      concertArr._embedded.events[1]._embedded.venues.name
    } <button id="addConcertsBtn">Add</button></li>
<li>${concertArr._embedded.events[2].name}: ${
      concertArr._embedded.events[2]._embedded.venues.name
    } <button id="addConcertsBtn">Add</button></li>
<li>${concertArr._embedded.events[3].name}: ${
      concertArr._embedded.events[3]._embedded.venues.name
    } <button id="addConcertsBtn">Add</button></li>
</ol>
`;
document.querySelector("#concertsContainer").innerHTML = searchResults;
  });
}
