$(document).ready(function() {
  console.log("ready!");

  $("#searchButton").on("click", function(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    $.ajax({
      url: url,
      type: "GET",
      contentType: "application/json; charset=utf-8",
//      async: false,
      datatype: "json",
      data: function(data, status, jqXHR) {
        console.log(data);
      },
    })
      .done(function(){
	console.log("Success");
      })
      .fail(function(){
	console.log("Error");
      })
      .always(function(){
	console.log("Complete");
      });


  });
  
});
