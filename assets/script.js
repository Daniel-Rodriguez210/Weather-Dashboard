var APIKey = "18238285e369b81b9e4f2b8e21537555";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=San Antonio,Texasi&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
 

  $(".city").html("<h5>" + response.name + " </h5>");
  $(".humidity").text("Humidity: " + response.main.humidity);
  $(".wind").text("Wind Speed: " + response.wind.speed);
  
  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

  var lat = response.coord.lat;
  var lon = response.coord.lon;

  var uvUrl = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";

  $.ajax({
    url: uvUrl,
    method: "GET"
}).then(function(response) {
    console.log(response);
    $(".uvindex").text("UV Index: " + response[0].value);
});
var cityName = response.name;
var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=18238285e369b81b9e4f2b8e21537555";

$.ajax({
    url: fiveDay,
    method: "GET"
}).then(function(response) {
    console.log(response)
    $(".fiveday").html("Five Day: " + response)
});

});




var cities = [""];

$("#searchButton").on("click", function(event) {
    event.preventDefault();
    var cities = $("#searchHistory").val().trim();
    cities.push(cities);
});

