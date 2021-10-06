$(function() {
  $("#kanye").click(function() {
    //default request is get
    /// default type is json
    //so we usually don't actually need to set these
    $.ajax({
      'url': 'https://api.kanye.rest/',
      'type': 'get',
      'dataType': 'json'
    }).done(function(data) {

      //jQuery automatically parses the JSON for us
      $('#kanye-quote').text(data.quote)
    }).fail(function() {
      //sometimes your request will fail, you can deal with that here
      $("#kanye-quote").text('Whoops, try again')

    }).always(function() {
      console.log('if you want to do something whether it fails or not, do it here')
    })
  })
})
