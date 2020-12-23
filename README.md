# UFO Sightings Table Filter

This project looks at UFO sighting data and automatically updates a table based on search criteria. The project aims to fulfil the multisearch criteria (i.e., UFO 2). This meets the criteria for UFO level 1, but doesn't fully succeed at UFO level 2. 

## Search Functions

In order to search with every new input, I created a search reset funtion that clears the value for each input field. This isn't ideal, and I will be revisiting this project to continue working on multifilter search. 

    function resetFilter() {

        document.getElementById("datetime").value = '';
        document.getElementById("city").value = '';
        document.getElementById("country").value = '';
        document.getElementById("state").value = '';
        document.getElementById("shape").value = '';
    }

For now, the reset function executes after the end of the filter / table append:

    // APPEND FILTERED DATA TO TABLE
    filteredData.forEach(function(entry) {

        var newRow = tbody.append('tr');

        Object.keys(entry).forEach(function(key) {
        newRow.append('td').text(entry[key])
        })
    })

    resetFilter(); 

Also, the user has been given the choice to reset the filter with the `clear search` button. This isn't necessary, but is nice to have. 