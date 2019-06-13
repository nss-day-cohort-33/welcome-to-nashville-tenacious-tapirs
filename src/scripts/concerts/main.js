function makeBtnWrk() {
  let saveBtns = document.querySelectorAll(".saveConcertBtn");
  for (let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", () => {
      document.querySelector("#concertsItenerary").innerHTML =
        saveBtns[i].parentElement.innerHTML;
    });
  }
}
