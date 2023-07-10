var APIKey = "d92153470384d5553e1bce2444b7e763";
var temp = document.querySelector('#currentTemp');
var wind = document.querySelector('#currentWind');
var humidity = document.querySelector('#currentHumidity');
var searchBtn = document.querySelector("#btn");
var todayDisplay = document.querySelector("#today");



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
  })










