// from data.js
var tableData = data;

// Select the Input Field
var formDateTime = d3.select('#datetime'); 

var formButton = d3.select('#filter-btn'); 

formDateTime.on('change', runFilter); 
formButton.on('click', runFilter); 

function runFilter() {
    event.preventDefault(); 
}