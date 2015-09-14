$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var newPlaceName = $("input#new-place-name").val();
    var newPlaceLocation = $("input#new-place-location").val();
    var newPlaceDate = $("input#new-place-date").val();
    var newPlaceNotes = $("textarea#new-place-notes").val();
    var newPlace = { name: newPlaceName, location: newPlaceLocation, date: newPlaceDate, notes: newPlaceNotes };

    $('ul#places').append('<li><span class="place">' + newPlace.name + "</span></li>")

    $(".place").last().click(function() {
      $("#show-place").fadeIn();
      $("#show-place h2").text(newPlace.name);
      $(".place-name").text(newPlace.name);
      $(".place-location").text(newPlace.location);
      $(".place-date").text(newPlace.date);
      $(".place-notes").text(newPlace.notes);
    });

    $("input#new-place-name").val("");
    $("input#new-place-location").val("");
    $("input#new-place-date").val("");
    $("input#new-place-notes").val("");

  });
});
