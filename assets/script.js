var APIKey = "18238285e369b81b9e4f2b8e21537555";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Austin,Texasi&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });










var cities = [""];

$("#searchButton").on("click", function(event) {
    event.preventDefault();
    var cities = $("#searchHistory").val().trim();
    cities.push(cities);
});

