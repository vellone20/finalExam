let link = localStorage["country-data-link"];

$(function(){
    $.getJSON(link, displayCountryData);
});

function displayCountryData(country) {
    console.log(country);
    $("#name").text(country.name);
    $("#continent").text(country.continent);
    $("#region").text(country.region);
    $("#surface_area").text(country.surface_area);
    $("#population").text(country.population);
}