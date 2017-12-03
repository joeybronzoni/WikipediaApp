$(document).ready(function() {
  console.log("ready!");
  var data = {};
  $("#searchButton").on("click", function(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    $.ajax({
      url: url,
      method: "GET",
      dataType: "jsonp",
    }).done((res, err) => {
      // console.log(res);
      // console.log("res[1][0a]",res[1][0]);
      // console.log("res[2][0]",res[2][0]);
      // console.log("res[3][0]",res[3][0]);
      for(var i = 0; i < res[1].length; i++) {
	console.log(i);
      }
        $("#response").html("<div id='newDiv'>" + "<h1>" + res[1][0] + "</h1>" + "<h2>" + res[2][0] + "</h2>" + "<p>" + res[3][0] + "</p>" + "</div>");
      
      data.res = JSON.stringify(res);
    }).fail((jqXHR, textStatus, errorThrown) => {
	     console.log(jqXHR.status);
	     console.log(textStatus);
	     console.log(errorThrown);
    }).always(() => {
      console.log("Complete");
    });
    
  });
  
});
/*$.ajax({
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
*/
