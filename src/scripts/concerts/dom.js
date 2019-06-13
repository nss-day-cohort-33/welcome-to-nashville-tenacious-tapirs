document.querySelector("#searchConcertsBtn").addEventListener("click", () => {
  document.querySelector("#searchResultsDiv").innerHTML = "";
});

document.querySelector("#searchConcertsBtn").addEventListener("click", () => {
  let userSearchInput = document.querySelector("#searchConcerts").value;
  console.log(userSearchInput);
  addApiData(userSearchInput);
});

