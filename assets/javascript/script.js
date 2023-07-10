var APIKey = "d92153470384d5553e1bce2444b7e763";
var temp = document.querySelector('#currentTemp');
var wind = document.querySelector('#currentWind');
var humidity = document.querySelector('#currentHumidity');
var searchBtn = document.querySelector("#btn");
var todayDisplay = document.querySelector("#today");
var cities = [];


// var responseText = document.getElementById('response-text');
// var targetCity = document.querySelector("#targetCity")

function getApi(queryURL) {
  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    temp = data.main.temp;
    wind = data.wind.speed;
    humidity = data.main.humidity;
    document.getElementById("currentTemp").innerHTML=temp;
    document.getElementById("currentWind").innerHTML=wind;
    document.getElementById("currentHumidity").innerHTML=humidity;
    });
}

searchBtn.addEventListener("click", function(){
  var city = document.querySelector("#input").value;
  document.getElementById("targetCity").innerHTML=city;
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
  getApi(queryURL);

  renderCities();
})




// fetch(queryURL.data)

// var searchInput = document.querySelector("#input");
// var searchForm = document.querySelector("#search-form");
var searchList = document.querySelector("#searchList");
// var targetCity = document.querySelector("#result-text");

var cities = [];



// // Creates a list item for each City Submitted
function renderCities() {
  searchList.innerHTML = "";

  for (var i = 0; i < cities.length; i++) {
    var chosenCity = cities[i];

    var h3 = document.createElement("h3");
    h3.textContent = City;
    h3.setAttribute("data-index", i);
    searchList.appendChild(h3);
  }
}


// // Stores Cities to Local Storage
// function storeCities() {
//   localStorage.setItem("Cities", JSON.stringify(cities));
// }

// function displayCity() {
//   var test = document.querySelector('#input').value;
  
//   // targetCity.innerHTML = "";
//   console.log(test);
//   // // for (var i = 0; i < cities.length; i++) {
//   //   var chosenCityDisplay = targetCity;

//   //   var h3main = document.createElement("h3");
//   //   h3main.textContent = chosenCityDisplay;
//   //   h3main.setAttribute(chosenCityDisplay);
//   //   targetCity.appendChild(h3main);
//   // // }
  
// }

// // Submits text input
// searchBtn.addEventListener("click", function(event) {
//   event.preventDefault();
//   var searchText = searchInput.value.trim();

//   if (searchText === "") {
//     return;
//   }

//   cities.push(searchText);
//   searchInput.value = "";

//   // console.log(searchText);
//   searchText = document.querySelector('#result-text');

//   storeCities();
//   renderCities();
//   displayCity();
// });



