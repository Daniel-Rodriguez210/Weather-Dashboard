var APIKey = "18238285e369b81b9e4f2b8e21537555";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=San Antonio,Texasi&appid=" + APIKey;



$(document).ready(function() {
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
 

  $(".city").html("<h5>" + response.name + " </h5>");
  $(".humidity").text("Humidity: " + response.main.humidity + " %");
  $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
  
  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  $(".tempF").text("Temperature (F) " + tempF.toFixed(0) + " °F");

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

    $(".date1").text(response.list[0].dt_txt)
    var tempF1 = (response.list[0].main.temp-273.15) * 1.80 + 32;
    $(".tempF1").text("Temperature (F) " + tempF1.toFixed(0) + " °F");
    $(".humid1").text("Humidity: " + response.list[0].main.humidity + " %");

    $(".date2").text(response.list[1].dt_txt)
    var tempF2 = (response.list[1].main.temp-273.15) * 1.80 + 32;
    $(".tempF2").text("Temperature (F) " + tempF2.toFixed(0) + " °F");
    $(".humid2").text("Humidity: " + response.list[1].main.humidity + " %");

    $(".date3").text(response.list[2].dt_txt)
    var tempF3 = (response.list[2].main.temp-273.15) * 1.80 + 32;
    $(".tempF3").text("Temperature (F) " + tempF3.toFixed(0) + " °F");
    $(".humid3").text("Humidity: " + response.list[2].main.humidity + " %");

    $(".date4").text(response.list[3].dt_txt)
    var tempF4 = (response.list[3].main.temp-273.15) * 1.80 + 32;
    $(".tempF4").text("Temperature (F) " + tempF4.toFixed(0) + " °F");
    $(".humid4").text("Humidity: " + response.list[3].main.humidity + " %");

    $(".date5").text(response.list[4].dt_txt)
    var tempF5 = (response.list[4].main.temp-273.15) * 1.80 + 32;
    $(".tempF5").text("Temperature (F) " + tempF5.toFixed(0) + " °F");
    $(".humid5").text("Humidity: " + response.list[4].main.humidity + " %");


});

});

});



var cities = [""];

$("#searchButton").on("click", function(event) {
    event.preventDefault();
    var cities = $("#searchHistory").val().trim();
    cities.push(cities);
});

