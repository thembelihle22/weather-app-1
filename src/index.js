function citySearchForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let cityElement = document.querySelector("#h1");
  cityElement.innerHTML = searchInput.value;
  console.log(searchInput.value);
}

let search = document.querySelector("#form-input");
search.addEventListener("submit", citySearchForm);
