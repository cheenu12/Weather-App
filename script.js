
const options = {
    method: "GET",
    headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
    }
};


const getWeather = (city) => {

    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp + '&deg;C'
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            feels_like.innerHTML = response.feels_like

            cloud_pct.innerHTML = response.cloud_pct

            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity + "% "
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed + " km/h"
        })



        .catch(err => console.error(err));
}


myButt.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})
getWeather(city.value);



let getWeatherBelow = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            //delhi

            tempdelhi.innerHTML = response.temp
            feelldelhi.innerHTML = response.feels_like
            humiditydelhi.innerHTML = response.humidity
            maxtempdelhi.innerHTML = response.max_temp
            mintempdelhi.innerHTML = response.min_temp
            sunrisedelhi.innerHTML = response.sunrise
            sunsetdelhi.innerHTML = response.sunset

            //lucknow
        })



        .catch(err => console.error(err));
}





//lucknow

let getWeatherBeloww = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            templucknow.innerHTML = response.temp;
            feelllucknow.innerHTML = response.feels_like;
            humiditylucknow.innerHTML = response.humidity;
            maxtemplucknow.innerHTML = response.max_temp;
            mintemplucknow.innerHTML = response.min_temp;
            sunriselucknow.innerHTML = response.sunrise;
            sunsetlucknow.innerHTML = response.sunset;
        })

        .catch(err => console.error(err));
}
let getWeatherBelowww = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            tempbanglaore.innerHTML = response.temp;
            feellbangalore.innerHTML = response.feels_like;
            humiditybangalore.innerHTML = response.humidity;
            maxtempbangalore.innerHTML = response.max_temp;
            mintempbangalore.innerHTML = response.min_temp;
            sunrisebangalore.innerHTML = response.sunrise;
            sunsetbangalore.innerHTML = response.sunset;
            
        })

        .catch(err => console.error(err));
}
let getWeatherBelowwww = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            temppatiala.innerHTML = response.temp;
            feelpatiala.innerHTML = response.feels_like;
            humiditypatiala.innerHTML = response.humidity;
            maxtemppatiala.innerHTML = response.max_temp;
            mintemppatiala.innerHTML = response.min_temp;
            sunrisepatiala.innerHTML = response.sunrise;
            sunsetpatiala.innerHTML = response.sunset;
            
        })

        .catch(err => console.error(err));
}

getWeatherBeloww("lucknow");
getWeatherBelow("Delhi");
getWeatherBelowww("Bangalore");
getWeatherBelowwww("patiala");