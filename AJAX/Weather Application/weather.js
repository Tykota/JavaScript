
var lat;
var lng;
var gridx;
var gridy;


function enterZip(){
    let zipcode  = document.getElementById("zip").value;
    function onSuccess(data) {
        lat = data.results[0].locations[0].latLng.lat;
        lng = data.results[0].locations[0].latLng.lng;
        console.log(lng);
        findCorrespondingNums();
    }

    function handleError(jqXHR, textStatus, error) {
        console.log(error);
    }

    $.ajax(
        {
            type: "GET",
            url: "http://open.mapquestapi.com/geocoding/v1/address?key=SEccmHDTgA6J9SexxhuYhn4jE1gjYPRa&location=" + zipcode,
            success: onSuccess,
            error: handleError
        }
    );


}


function populateWeather(){
    function onSuccess(data){
        let printThis = data.properties.periods;

        for(i = 0; i < printThis.length; i++){
            let day = printThis[i].name + " is " + printThis[i].detailedForecast;
            let entry = document.createElement("p");
            entry.textContent = day;

            document.getElementById("weather").appendChild(entry);
        }
    }
    function handleError() {

    }

    $.ajax(
        {
            type: "GET",
            url: "https://api.weather.gov/gridpoints/CTP/" + gridx + "," + gridy + "/forecast",
            success: onSuccess,
            error: handleError
        }
    );
}

//find the proper numbers required by the weather API
function findCorrespondingNums(){
    function onSuccess(data){
        gridx = data.properties.gridX;
        gridy = data.properties.gridY;
        console.log(lng);
        populateWeather();
    }
    function handleError() {

    }

    $.ajax(
        {
            type: "GET",
            url: "https://api.weather.gov/points/" + lat + "," + lng,
            success: onSuccess,
            error: handleError
        }
    );
}