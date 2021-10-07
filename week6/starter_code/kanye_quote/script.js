// wrapping all our code in this $(function() {}) is a "best practice" in jQuery - it tells the code to wait to execute until the HTML is fully loaded
$(function() {

  $("#kanye").click(function() {
    $.ajax({
      'url': 'https://apalkdjdf/',
      'type': 'get',
      'dataType': 'json'
    }).done(function(data) {
        console.log('data: ', data)
        $("#kanye-quote").text(data.quote)
    }).fail(function() {
        $("#kanye-quote").text('Sorry, no quotes')
    }).always(function() {
        $("#kanye-quote").append('<p>request made</p>')
    })
  })
})
