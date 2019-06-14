function makeBtnWrk() {
  let saveBtns = document.querySelectorAll(".saveConcertBtn");
  for (let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", () => {
      document.querySelector("#concertsItenerary").innerHTML =
        saveBtns[i].parentElement.firstChild.innerHTML;

      rmvBtn();
    });
  }
}
function rmvBtn() {
  var btn = document.querySelector("addConcertsBtn");
  btn.parentNode.removeChild(btn);
}
