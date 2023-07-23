const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "68c8537bc3msh9e0d41a60adb8fcp13c722jsn3f2e328e49c7",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) =>{
	const url =
	"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
		cityName.innerHTML = city
		fetch(url, options).then(response=>response.json()).then((response) => {

			console.log(response);
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
			
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Jaipur")
const displayWeather = (city) => {
	const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
	fetch(url, options).then(response=>response.json()).then((response) => {

		console.log(response);
		eval("cloud_pct_"+city).innerHTML = response.cloud_pct
		eval("temp_"+city).innerHTML = response.temp
		eval("feels_like_"+city).innerHTML = response.feels_like
		eval("humidity_"+city).innerHTML = response.humidity
		eval("min_temp_"+city).innerHTML = response.min_temp
		eval("max_temp_"+city).innerHTML = response.max_temp
		eval("wind_speed_"+city).innerHTML = response.wind_speed
		eval("wind_degrees_"+city).innerHTML = response.wind_degrees
		eval("sunrise_"+city).innerHTML = response.sunrise
		eval("sunset_"+city).innerHTML = response.sunset
	})
}

displayWeather("Kolkata")
displayWeather("Bengaluru")
displayWeather("Mumbai")
displayWeather("Chennai")