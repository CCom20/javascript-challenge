// from data.js
var tableData = data;
var tableKeys = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']

// Select the Input Field for Date Time and the Form Filter Button
var formDateTime = d3.select('#datetime'); 

var formButton = d3.select('#filter-btn'); 

// Set functions to run on enter and form field change
formDateTime.on('change', runFilter); 
formDateTime.on('submit', runFilter); 
formButton.on('click', runFilter); 

// Function to Filter and Display results
function runFilter() {
    
    event.preventDefault();

    var dateInput = formDateTime.property('value');

    var tbody = d3.select('tbody');

    var filteredData = data.filter(sighting => sighting.datetime == dateInput)
    console.log(filteredData)

    tbody.html("");

    filteredData.forEach(dataRow => {
        var tableRow = tbody.append('tr');

        
    }); 

    // for (var i = 0; i < filteredData.length; i++) {
        
    //     var newRow = tbody.append('tr');

    //     newRow.append('td').text(`${filteredData[i].datetime}`);
    //     newRow.append('td').text(`${filteredData[i].city}`);
    //     newRow.append('td').text(`${filteredData[i].state}`);
    //     newRow.append('td').text(`${filteredData[i].country}`);
    //     newRow.append('td').text(`${filteredData[i].shape}`);
    //     newRow.append('td').text(`${filteredData[i].durationMinutes}`);
    //     newRow.append('td').text(`${filteredData[i].comments}`);
    // }
}

var dateControl = d3.select('#datetime');
var cityControl = d3.select('#city');
var stateControl = d3.select('#state');
var countryControl = d3.select('#country');
var shapeControl = d3.select('#shape');