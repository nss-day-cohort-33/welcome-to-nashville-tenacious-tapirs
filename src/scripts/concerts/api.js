function getApiConcert(genre) {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&countryCode=US&apikey=${
      concertsAppKeys.appKey
    }&classificationName=${genre}`
  ).then(concertFromApi => concertFromApi.json());
}

function addApiData(concertItem) {
  getApiConcert(concertItem).then(concertArr => {
    console.log(concertArr);
    let searchResults = `
    <ol>
    <li><p>${concertArr._embedded.events[0].name} at ${
      concertArr._embedded.events[0]._embedded.venues[0].name
    } </p><button id="addConcertsBtn" class="saveConcertBtn">Save</button></li>
    <li><p>${concertArr._embedded.events[1].name} at ${
      concertArr._embedded.events[1]._embedded.venues[0].name
    } </p><button id="addConcertsBtn" class="saveConcertBtn">Save</button></li>
    <li><p>${concertArr._embedded.events[2].name} at ${
      concertArr._embedded.events[2]._embedded.venues[0].name
    } </p><button id="addConcertsBtn" class="saveConcertBtn">Save</button></li>
    <li><p>${concertArr._embedded.events[3].name} at ${
      concertArr._embedded.events[3]._embedded.venues[0].name
    } </p><button id="addConcertsBtn" class="saveConcertBtn">Save</button></li>
    </ol>
    `;
    document.querySelector("#searchResultsDiv").innerHTML = searchResults;
    makeBtnWrk();
    console.log(document.querySelectorAll(".saveConcertBtn"));
  });
}
