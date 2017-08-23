$( document ).ready(function () {
  $( "#headline-submit" ).click(function (event) {
    event.preventDefault();
    var headline = $( "#headline-input" )[0].value;
    var headlineResponse = $("#headline-response")

    $.get("https://percepticon.herokuapp.com/scores/new", { title: headline }, function (response) {
      headlineResponse.removeClass();
      if(response.result === 1) {
        headlineResponse.html ("bad")
        headlineResponse.addClass("alert alert-danger")
      } else if (response.result === 0) {
        headlineResponse.html ("good")
        headlineResponse.addClass("alert alert-success")
      };
    });
  });

});
