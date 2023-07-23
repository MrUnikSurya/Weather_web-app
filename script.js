const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ajmer';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68c8537bc3msh9e0d41a60adb8fcp13c722jsn3f2e328e49c7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}