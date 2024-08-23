function citySearchForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let cityElement = document.querySelector("#h1");
  cityElement.innerHTML = searchInput.value;

  let apiKey = "59tfe2c834300cb76dbcd14b56oa0baf";
  let api =
    "https://api.shecodes.io/weather/v1/current?query=searchInput.value&key=apiKey&units=metric";
}

let search = document.querySelector("#form-input");
search.addEventListener("submit", citySearchForm);
