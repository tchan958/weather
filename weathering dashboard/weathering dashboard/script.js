$.ajax({
    method: 'GET'
    URL: 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&
    exclude={param}&appid={apikey}'
}).then(response=>{
    renderWeather(response)
    console.log(response)
})
$('button-submit').on('click', function(){
    var search = $('#searchInput').val().trim();
    searchHistory.includes(search) ? '' : searchHistory.push(search);
    localStorage.setItem('search', JSON.stringify(searchHistory));
    renderBtns()
    runSearch(search)
})
//current weather data
var unirest = require("unirest");
var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");
req.query({
	"callback": "test",
	"id": "2172797",
	"units": "%22metric%22 or %22imperial%22",
	"mode": "xml%2C html",
	"q": "London%2Cuk"
});
req.headers({
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "eb38e87418msh1f5c622e8fc43f0p10e3e6jsnaea209060563",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});
//search weather data
var unirest = require("unirest");
var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/find");
req.query({
	"type": "link%2C accurate",
	"units": "imperial%2C metric",
	"q": "london"
});
req.headers({
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "eb38e87418msh1f5c622e8fc43f0p10e3e6jsnaea209060563",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});
//historical weather data
var unirest = require("unirest");
var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/onecall/timemachine");
req.query({
	"lat": "37.774929",
	"lon": "-122.419418",
	"dt": "1590094153"
});
req.headers({
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "eb38e87418msh1f5c622e8fc43f0p10e3e6jsnaea209060563",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});
//climate forecast
var unirest = require("unirest");
var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/climate/month");
req.query({
	"q": "San Francisco"
});
req.headers({
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "eb38e87418msh1f5c622e8fc43f0p10e3e6jsnaea209060563",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});
