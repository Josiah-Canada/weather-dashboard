function weatherSearch(){
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=eb75c7c4e7622ead3f14c1ae67623f07")
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayInfo(data)
    })
        //call display info
    //  var searchText = document.getElementById("search-button")
    //  searchText.addEventListener("click", data)
    //   console.log(searchText)
    
      

    };
// get the city form the search box and take the data from the api and put it on the page
// put weather on the page



function displayInfo(){
    // displaying weather info after search
    const temp = data.temp[0];
    const tempP = document.getElementById("temp")
    
}

var searched = document.getElementById("search-button");
searched.addEventListener("click", weatherSearch);