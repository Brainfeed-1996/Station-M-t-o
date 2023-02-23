// Manipulation du DOM
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchInput")
const city = document.getElementById("searchInput")
const condition = document.getElementById("searchInput")
const temperature = document.getElementById("searchInput")
const sumrise = document.getElementById("searchInput")
const humidity = document.getElementById("searchInput")

//API infos

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06950507c4mshe7f4a98eeaef866p135940jsneb3fa6d328c0',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};
//Chercher l'info requête
searchButton.onclick = () => {
if (searchInput.value === ""){
    alert("Veuillez saisir une ville");
} else {

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=paris&format=json&u=f', options)
    .then(response => response.json()) //Formatage

	.then(response => {
        city.innerText = response.location.city;
        condition.innerText = response.current_observation.condition.text;
        temperature.innerText = response.current_observation.condition.temperature;
        sumrise.innerText = response.current_observation.astronomy.sumrise;
        humidity.innerText = response.current_observation.atmosphere.humidity;
    }) //Affichage
	.catch(err => console.error(err)); //Erreur si besoin
    }
}