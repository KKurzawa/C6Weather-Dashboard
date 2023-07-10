var APIKey = "d92153470384d5553e1bce2444b7e763";
var temp = document.querySelector('#currentTemp');
var wind = document.querySelector('#currentWind');
var humidity = document.querySelector('#currentHumidity');
var searchBtn = document.querySelector("#btn");
var todayDisplay = document.querySelector("#today");



// var responseText = document.getElementById('response-text');
// var targetCity = document.querySelector("#targetCity")
function makeWeather(data){
  //this would be a good place to call saveToStraoge(newCitynamefrom)
  saveToStorage();
  temp = data.main.temp;
  wind = data.wind.speed;
  humidity = data.main.humidity;
  document.getElementById("currentTemp").innerHTML=temp;
  document.getElementById("currentWind").innerHTML=wind;
  document.getElementById("currentHumidity").innerHTML=humidity;
}

function getApi(queryURL, type) {
  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if(type === "weather"){
      makeWeather(data)
    } else{
      makeForecast(data)
    }
   
    });
}

function makeForecast(data){
  console.log(data)
  var cardsContainer = document.getElementById("cards");
  //here you must get rid of the old batch
  for (let index = 0; index < data.list.length; index += 8) {
    
    var card = makeForecastCard(data.list[index])
    cardsContainer.appendChild(card);
  }
}

function makeForecastCard(data){
  console.log(data)
  var card = document.createElement("div");
  card.className = "card col-12 col-md-2 flex-column justify-content-center align-center ms-4 me-3 border border-dark text-center"
  var cardHeader = document.createElement("h5");
  var date = new Date(data.dt*1000)
  cardHeader.innerHTML = dayjs(date).format('MMM D');
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
  



searchBtn.addEventListener("click", function(){
  var city = document.querySelector("#input").value;
  document.getElementById("targetCity").innerHTML=city;
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
  getApi(weatherURL, "weather");
  var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";
  getApi(forecastURL, "forecast")  
  
})



function saveToStorage(){
  //read our storage (JSON.parse("whaterver I use to read the storage"))
  //------ IS THERE GOING TO BE STORAGE?
  //IF THERE IS NO STROAGE
  var cities = []
  
  var newCity = document.querySelector("#input");
  var cityText = newCity.value;

  // Return from function early if submitted todoText is blank
  if (cityText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  cities.push(cityText);
 
  
  console.log(newCity.value);
  localStorage.setItem("Cities", JSON.stringify(cities));
  return;

  // my storage is what dataType? Array
  // add an element to an array
  //if my array is too long now, maybe get rid of the oldest one
  // SAVE IT TO STORAGE AND STRIGNIFY THE ARRAY


  //loadStorage()
}


function loadStorage(){
  //read our storage, parse it
  //if there is no stroage, so we return
  // Here we would empty the parent container
  // then loop through the array and render the batch
  // add event listener, and then call (getAPI with the city in the button)
  //make sure the city here comes from the button's innerHTML
  // var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
  // getApi(weatherURL, "weather");
  // var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";
  // getApi(forecastURL, "forecast")  
}


