// from data.js
var tableData = data;

// Select overarching filter
var searchFilter = d3.select("#searchFilter")

// Select the Filter and Clear Search Buttons
var formButton = d3.select('#filter-btn');

var clearButton = d3.select('#clear-filter'); 

// Select the Input Fields 

var formDateTime = d3.select('#datetime'); 

var cityControl = d3.select('#city');

var stateControl = d3.select('#state');

var countryControl = d3.select('#country');

var shapeControl = d3.select('#shape');

// Set functions to run on enter and form field change
searchFilter.on('change', runFilter);
searchFilter.on('submit', runFilter);

// Set ways to reset the filters
formButton.on('click', runFilter);
clearButton.on('click', resetFilter)

// Set function to clear fields for new search 
function resetFilter() {

    document.getElementById("datetime").value = '';
    document.getElementById("city").value = '';
    document.getElementById("country").value = '';
    document.getElementById("state").value = '';
    document.getElementById("shape").value = '';

}

// Function to Filter and Display results
function runFilter() {
    
    event.preventDefault();

    var tbody = d3.select('tbody');

    tbody.html("");

    // SET DATE VARIABLE
    var dateInput = formDateTime.property('value');
    
    // SET CITY VARIABLE, CONVERT TO LOWERCASE FOR SEARCH
    var cityInput = cityControl.property('value');
    var cityLower = cityInput.toLowerCase();

    // SET STATE VARIABLE, CONVERT TO LOWERCASE FOR SEARCH 
    var stateInput = stateControl.property('value');
    var stateLower = stateInput.toLowerCase();

    // SET COUNTY VARIABLE, CONVERT TO LOWERCASE FOR SEARCH
    var countryInput = countryControl.property('value');
    var countryLower = countryInput.toLowerCase();

    // SET SHAPED VARIABLE, CONVERT TO LOWERCASE FOR SEARCH
    var shapeInput = shapeControl.property('value');
    var shapeLower = shapeInput.toLowerCase();

    // USER DATE INPUT FILTER AND APPEND
    if (dateInput) {
        var filteredData = data.filter(sighting => sighting.datetime == dateInput)
        console.log(filteredData)
    }

    // USER CITY INPUT FILTER AND APPEND
    else if (cityInput) {
        var filteredData = data.filter(sighting => sighting.city == cityLower)
        console.log(filteredData)
    }

    // USER STATE INPUT FILTER AND APPEND
    else if (stateInput) {
        var filteredData = data.filter(sighting => sighting.state == stateLower)
        console.log(filteredData)
    }

    // USER COUNTRY INPUT FILTER AND APPEND
    else if (countryInput) {
        var filteredData = data.filter(sighting => sighting.country == countryLower)
        console.log(filteredData)
    }

    // USER COUNTRY INPUT FILTER AND APPEND
    else if (shapeInput) {
        var filteredData = data.filter(sighting => sighting.shape == shapeLower)
        console.log(filteredData)
    }

    // APPEND FILTERED DATA TO TABLE
    filteredData.forEach(function(entry) {

        var newRow = tbody.append('tr');

        Object.keys(entry).forEach(function(key) {
        newRow.append('td').text(entry[key])
        })
    })

    resetFilter(); 
}