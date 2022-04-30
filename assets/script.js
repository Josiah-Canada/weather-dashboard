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
function getInfo(){
  const newName = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML ="--"+newName.value+"--"

  fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=eb75c7c4e7622ead3f14c1ae67623f07")
.then(response => response.json())
.then(data =>{
  for(i=0;i<5;i++){
    document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min -288.53).toFixed(1);
  }
  for(i=0;i<5;i++){
    document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -288.53).toFixed(1);
  }
  for(i=0;i<5;i++){
    document.getElementById("img" +(i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather.[0].icon+".png";
  }
})

.catch(err => alert("something went wrong!"))
}

function defaultScreen(){
  document.getElementById("cityInput").defaultValue ="London";
  getInfo();
}

const d =new Date();
const weekday =["Sunday","Monday","Teusday","Wednesday","Thusday","Friday","Saturday"];

function checkDay(day){
  if(day +d.getDay() > 6){
    return day +d.getDay()-7;
  }
  else{
    return day +d.getDay();
  }
}

for(i=o;i<5;i++){
  document.getElementById("day"+(i+1)).innerHTML = weekday[checkDay(i)];
}

function weatherForecast(){
  fetch ("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=eb75c7c4e7622ead3f14c1ae67623f07")
  .then(function(response) {
    return response.json();
  })
  .then(data => {
    displayDaily(data)
  })
};
function displayDaily(data){
  console.log(data);



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
   
    
}

var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function(){
  var cityName = document.getElementById("city-input").value;
  console.log(cityName)
  weatherSearch(cityName);
  //get whatever was typed

});


