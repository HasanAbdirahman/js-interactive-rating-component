let submitButton = document.querySelector(".ending");
let displayPage = document.querySelector(".next-page");
let select = document.querySelectorAll(".circle");
let rating = document.querySelector(".protect");
let firstPage = document.querySelector(".first-page");

submitButton.addEventListener("click", function () {
  document.querySelector(".next-page").classList.remove("hidden");
  firstPage.classList.add("hidden");

  for (const each of select) {
    if (each.clicked == true) {
      rating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5";
    }
  }
});
