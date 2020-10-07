// My weather API Key
var API_Key = "18238285e369b81b9e4f2b8e21537555";
// Need to create a variable that allows the $ to get the city input by the user 
var city = $("#searchcity").val();
// Building the we need to query the database
var queryURL ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + "q=Austin,Texas&appid=" + API_Key;

//Run our AJAX to call the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
})

// Store all of the retrieved data 
.then(function(response) {

    console.log(response);
    console.log(queryURL);

    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".temperature").text("Temperature: " + response.main.temp);
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    
    // Convert the temp to fahrenheit
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    // add temp content to html
    $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + tempF);

});

