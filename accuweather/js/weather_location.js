var currentURL = location.href;
var urlObj = new URL(currentURL);

var params = urlObj.searchParams;
console.log(params);
var q = params.get("q");
console.log(q);

var result = getCurrentWeather(q);

$("#temp").text(result.main.temp + "℃");
$("#wind").text(result.wind.speed + "m/s");
$("#humidity").text(result.main.humidity + "%");