document.querySelector("#searchConcertsBtn").addEventListener("click", () => {
  document.querySelector("#concertContainer").innerHTML = "";
});

document.querySelector("#searchConcertsBtn").addEventListener("click", () => {
  let userSearchInput = document.querySelector("#searchConcerts").value;
  console.log(userSearchInput);
  addApiData(userSearchInput);
});

