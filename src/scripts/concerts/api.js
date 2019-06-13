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

    for (i = 0; i < 4; i++) {
      let result = `<p>${i + 1}. ${concertArr._embedded.events[i].name} at ${
        concertArr._embedded.events[i]._embedded.venues[0].name
      } <button id="addConcertsBtn">Save</button></p>`;
      if (
        concertArr._embedded.events[i]._embedded.venues[0].city.name.value === 
          "Nashville"

      )
      console.log(concertArr._embedded.events[i]._embedded.venues[0].city.name.value)
        document.querySelector("#concertsContainer").innerHTML += result;
    }
    //     let searchResults = `
    // <ol>
    // <li>${concertArr._embedded.events[0].name} at ${
    //       concertArr._embedded.events[0]._embedded.venues[0].name
    //     } <button id="addConcertsBtn">Save</button></li>
    // <li>${concertArr._embedded.events[1].name} at ${
    //       concertArr._embedded.events[1]._embedded.venues[0].name
    //     } <button id="addConcertsBtn">Save</button></li>
    // <li>${concertArr._embedded.events[2].name} at ${
    //       concertArr._embedded.events[2]._embedded.venues[0].name
    //     } <button id="addConcertsBtn">Save</button></li>
    // <li>${concertArr._embedded.events[3].name} at ${
    //       concertArr._embedded.events[3]._embedded.venues[0].name
    //     } <button id="addConcertsBtn">Save</button></li>
    // </ol>
    // `;
    // document.querySelector("#concertsContainer").innerHTML = searchResults;
  });
}
