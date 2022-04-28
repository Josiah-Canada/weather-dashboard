function weatherSearch(city){
    fetch ("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=eb75c7c4e7622ead3f14c1ae67623f07")
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      displayInfo(data) 
    })
        //call display info
    };
// get the city form the search box and take the data from the api and put it on the page
// put weather on the page
function weatherForecast(){
  fetch ("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=daily&appid=eb75c7c4e7622ead3f14c1ae67623f07")
  .then(function(response) {
    return response.json();
  })
  .then(data => {
    displayDaily(data)
  })
};
function displayDaily(data){
  console.log(data);

  const weather = daily.weather.description;
  const forecastH2 = document.getElementById("forecast").textContent = weather
  console.log(weather);

};

function displayInfo(data) {
   console.log(data);
    // displaying weather info after search
    //var temperature = document.getElementById("temp")
    const temp = data.main.temp;
    const tempDiv = document.getElementById("temp").textContent = temp
    const humidity = data.main.humidity;
    const humidityDiv = document.getElementById("humidity").textContent = humidity
    const wind = data.wind.speed;
    const windSpeedDiv = document.getElementById("windSpeed").textContent = wind
    // const uvi = data.current.uvi;
    // const uviDiv = document.getElementById("uvi").textContent = uvi
    const lon = data.coord.lon;
    const lat = data.coord.lat;
    
}

var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function(){
  var cityName = document.getElementById("city-input").value;
  console.log(cityName)
  weatherSearch(cityName);
  //get whatever was typed

});


