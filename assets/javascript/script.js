var APIKey = "d92153470384d5553e1bce2444b7e763";
var temp = document.querySelector('#currentTemp');
var wind = document.querySelector('#currentWind');
var humidity = document.querySelector('#currentHumidity');
var searchBtn = document.querySelector("#btn");
var todayDisplay = document.querySelector("#today");
var cities = []

function makeWeather(data) {
  saveToStorage();
  temp = data.main.temp;
  wind = data.wind.speed;
  humidity = data.main.humidity;
  document.getElementById("currentTemp").innerHTML = temp;
  document.getElementById("currentWind").innerHTML = wind;
  document.getElementById("currentHumidity").innerHTML = humidity;
}

function getApi(queryURL, type) {
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (type === "weather") {
        makeWeather(data)
      } else {
        makeForecast(data)
      }

    });
}

function clearBox() {
  var div = document.getElementById("cards");

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function makeForecast(data) {
  var cardsContainer = document.getElementById("cards");
  clearBox();

  for (let index = 0; index < data.list.length; index += 8) {
    var card = makeForecastCard(data.list[index])
    cardsContainer.appendChild(card);
  }
}

function makeForecastCard(data) {
  var card = document.createElement("div");
  card.className = "card col-12 col-md-2 flex-column justify-content-center align-center ms-4 me-1 border border-dark text-center"
  var cardHeader = document.createElement("h5");
  var date = new Date(data.dt * 1000)
  cardHeader.innerHTML = dayjs.unix(data.dt).utc().format('MMM D');
  card.appendChild(cardHeader);
  var cardTemp = document.createElement("h6");
  cardTemp.innerHTML = "Temp: " + data.main.temp + " °F";
  card.appendChild(cardTemp);
  var cardWind = document.createElement("h6");
  cardWind.innerHTML = "Wind: " + data.wind.speed + " MPH";
  card.appendChild(cardWind);
  var cardHUM = document.createElement("h6");
  cardHUM.innerHTML = "HUM: " + data.main.temp + " %";
  card.appendChild(cardHUM);
  return card;
}

function saveToStorage() {
  var newCity = document.querySelector("#input");
  var cityText = newCity.value;

  if (cityText === "") {
    return;
  }

  cities.push(cityText);
  localStorage.setItem("Cities", JSON.stringify(cities));
  return;
}

function loadStorage() {
  var city = document.querySelector("#input").value;
  var el = document.createElement('h4');
  el.className = "element";
  el.innerHTML = city;
  document.getElementById('searchList').appendChild(el);
  el.addEventListener('click', function () {
    document.getElementById("targetCity").innerHTML = city;
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    getApi(weatherURL, "weather");
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";
    getApi(forecastURL, "forecast")
    clearText();
  })
}

function clearText() {
  var clearCity = document.querySelector("#input");
  clearCity.value = "";
}

searchBtn.addEventListener("click", function () {
  var city = document.querySelector("#input").value;
  document.getElementById("targetCity").innerHTML = city;
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
  getApi(weatherURL, "weather");
  var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";
  getApi(forecastURL, "forecast")
  loadStorage();
  saveToStorage();
  clearText();
  todayDisplay.style.display = "block";
  var cardsHeader = document.querySelector("#cardsHeader");
  cardsHeader.style.display = "block";
  var searchHeader = document.querySelector("#searchHeader");
  searchHeader.style.display = "block";
})


