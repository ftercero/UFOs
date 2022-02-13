// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
  // Step 5
  // let city = d3.select("#city").property("value");
  // let state = d3.select("#state").property("value");
  // let country = d3.select("#country").property("value");
  // let shape = d3.select("#shape").property("value");
  


    // 4a. Save the element that was changed as a variable.
      var changeTheElement = d3.select(this).select("input");
    // 4b. Save the value that was changed as a variable.
      var newValue = changeTheElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
      var newId = changeTheElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 if (newValue){
filters[newId] = newValue;
 }

  else{ delete filters[newId];}
 

 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    // if (city) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      // filteredData = filteredData.filter(row => row.city === city)
      // filteredData = filteredData.filter(row => row.state === state)
      // filteredData = filteredData.filter(row => row.country === country)
      // filteredData = filteredData.filter(row => row.shape === shape);
      // filteredData = filteredData.filter()
  // };
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key,value]) =>{
      // let userInput=d3.select("#"+key).property("value");
      // if (value){
        filteredData = filteredData.filter(row => row[key] === value);
      // };
    }
      
    );


  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#key").on("click", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
