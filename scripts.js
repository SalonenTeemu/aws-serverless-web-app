// Add your API endpoint here
var API_ENDPOINT = "API_ENDPOIND_HERE";

// AJAX POST request to save pet data
document.getElementById("savepet").onclick = function () {
  var inputData = {
    petId: $("#petid").val(),
    name: $("#name").val(),
    breed: $("#breed").val(),
    age: $("#age").val(),
  };
  $.ajax({
    url: API_ENDPOINT,
    type: "POST",
    data: JSON.stringify(inputData),
    contentType: "application/json; charset=utf-8",
    success: function () {
      document.getElementById("petSaved").innerHTML = "Pet Data Saved!";
    },
    error: function () {
      alert("Error saving pet data.");
    },
  });
};

// AJAX GET request to retrieve all pets
document.getElementById("getpets").onclick = function () {
  $.ajax({
    url: API_ENDPOINT,
    type: "GET",
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      // Clear previous rows from the table
      $("#pettable tbody").empty();

      // Append new rows with data from the response
      jQuery.each(response, function (i, data) {
        $("#pettable tbody").append(
          "<tr> \
                    <td>" +
            data["petId"] +
            "</td> \
                    <td>" +
            data["name"] +
            "</td> \
                    <td>" +
            data["breed"] +
            "</td> \
                    <td>" +
            data["age"] +
            "</td> \
                    </tr>"
        );
      });
    },
    error: function () {
      alert("Error retrieving pet data.");
    },
  });
};
