function weatherSearch(){
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=eb75c7c4e7622ead3f14c1ae67623f07")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        //call display info
      console.log(data)
    });
// get the city form the search box and take the data from the api and put it on the page
// put weather on the page
}


function displayInfo(){
    // displaying weather info after search
}

var searched = document.getElementById("search-button");
searched.addEventListener("click", weatherSearch);