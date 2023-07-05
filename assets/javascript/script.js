var APIKey = "d92153470384d5553e1bce2444b7e763";
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)

