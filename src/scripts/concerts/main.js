
let addBtn = document.querySelector("addConcertsBtn");
addBtn.addEventListener("click", () => {
  document.querySelector("#concertsItenerary").innerHTML =
    addBtn.parentElement.innerHTML;
});
