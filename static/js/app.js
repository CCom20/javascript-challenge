// from data.js
var tableData = data;

// Select the Input Field for Date Time and the Form Filter Button
var formDateTime = d3.select('#datetime'); 

var formButton = d3.select('#filter-btn'); 

// Set functions to run on enter and form field change
formDateTime.on('change', runFilter); 
formButton.on('click', runFilter); 

function refreshPage() {
    return location.reload(true);
}

// Function to Filter and Display results
function runFilter() {
    
    event.preventDefault();

    var dateInput = formDateTime.property('value');

    var tbody = d3.select('tbody');

    var filteredData = data.filter(sighting => sighting.datetime === dateInput)
    console.log(filteredData)

    tbody.html(""); 

    for (var i = 0; i < filteredData.length; i++) {
        
        var newRow = tbody.append('tr');

        newRow.append('td').text(`${filteredData[i].datetime}`);
        newRow.append('td').text(`${filteredData[i].city}`);
        newRow.append('td').text(`${filteredData[i].state}`);
        newRow.append('td').text(`${filteredData[i].country}`);
        newRow.append('td').text(`${filteredData[i].shape}`);
        newRow.append('td').text(`${filteredData[i].durationMinutes}`);
        newRow.append('td').text(`${filteredData[i].comments}`);
    }
}