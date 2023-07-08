var APIKey = "d92153470384d5553e1bce2444b7e763";
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL.data)

var searchInput = document.querySelector("#input");
var searchForm = document.querySelector("#search-form");
var searchList = document.querySelector("#searchList");
var searchBtn = document.querySelector("#btn");
var cities = [];

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

// Creates a list item for each City Submitted
function renderCities() {
  searchList.innerHTML = "";

  for (var i = 0; i < cities.length; i++) {
    var chosenCity = cities[i];

    var li = document.createElement("li");
    li.textContent = chosenCity;
    li.setAttribute("data-index", i);
    searchList.appendChild(li);
  }
}


// Stores Cities to Local Storage
function storeCities() {
  localStorage.setItem("Cities", JSON.stringify(cities));
}

// Submits text input
searchBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var searchText = searchInput.value.trim();

  if (searchText === "") {
    return;
  }

  cities.push(searchText);
  searchInput.value = "";

  storeCities();
  renderCities();
});



