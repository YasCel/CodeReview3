$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var favoriteFoodInput = $("input#favoriteFood").val();
    var favoriteBookInput = $("input#favoriteBook").val();
    var favoriteMovieInput = $("input#favoriteMovie").val();
    var favoriteCity = $("input#favoriteCity").val();

    $(".name1").text(name1Input);
    $(".favoriteFood").text(favoriteFoodInput);
    $(".favoriteBook").text(favoriteBookInput);
    $(".favoriteMovie").text(favoriteMovieInput);
    $(".favoriteCity").text(favoriteCity);

    $("#favoriteList").show();

    event.preventDefault();

  });
});
