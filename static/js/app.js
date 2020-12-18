// from data.js
var tableData = data;

// Select the Input Field for Date Time and the Form Filter Button
var formDateTime = d3.select('#datetime'); 

var formButton = d3.select('#filter-btn'); 

// Set functions to run on enter and form field change
formDateTime.on('change', runFilter); 
formButton.on('click', runFilter); 

// Function to Filter and Display results
function runFilter() {
    
    event.preventDefault();

    var dateInput = formDateTime.property('value');

    var tbody = d3.select('tbody');

    var filteredData =dateInput.filter(sighting => sighting.datetime === dateInput)

    for (var i = 0; i < data.length; i++) {

        if (dateInput == data[i].datetime) {
            console.log(data[i].datetime);
            
            var newRow = tbody.append('tr');

            newRow.append('td').text(`${data[i].datetime}`);
            newRow.append('td').text(`${data[i].city}`);
            newRow.append('td').text(`${data[i].state}`);
            newRow.append('td').text(`${data[i].country}`);
            newRow.append('td').text(`${data[i].shape}`);
            newRow.append('td').text(`${data[i].durationMinutes}`);
            newRow.append('td').text(`${data[i].comments}`);
        }
    }
}