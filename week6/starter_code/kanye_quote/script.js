// wrapping all our code in this $(function() {}) is a "best practice" in jQuery - it tells the code to wait to execute until the HTML is fully loaded
$(function() {

  $("#kanye").click(function() {
    $.ajax({
      'url': 'https://api.kanye.rest/',
    }).done(function(data) {

    }).fail(function() {

    }).always(function() {
    })
  })
})
