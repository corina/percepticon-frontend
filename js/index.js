$( document ).ready(function () {
  $( "#headline-submit" ).click(function (event) {
    event.preventDefault();
    var headline = $( "#headline-input" )[0].value;

    $.get("http://percepticon.herokuapp.com/scores/new", { title: headline }, function (response) {
      // TODO: update visual feedback element in index.html with API response
    });
  });
});
