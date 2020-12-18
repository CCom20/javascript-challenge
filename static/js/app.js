// from data.js
var tableData = data;

// Select the Input Field for Date Time and the Form Filter Button
var formDateTime = d3.select('#datetime'); 

var formButton = d3.select('#filter-btn'); 

// Set functions to run on enter and form field change
formDateTime.on('change', runFilter); 
formButton.on('click', runFilter); 

// Filter data

// var filteredData = data.filter((object) => object.datetime) 
// console.log(filteredData)

// Function to Filter and Display results
function runFilter() {
    event.preventDefault();

    var dateInput = formDateTime.event.target.value;

    for (var i = 0; i < data.length; i++) {
        if (dateInput ==) {

        }
    }



}