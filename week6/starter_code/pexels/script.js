//onload function
let apiKey = 'your key here'
$(function() {
  $("#img-search").click(function() {
    let searchTerm = $("#search-term").val()
    // reset fail on each search
    $("#fail").text('')
    // make sure the searchTerm isn't empty
    if (searchTerm !== '') {

        // we have to use an AJAX request here because we're using an API key
      $.ajax({

      }).done(function(data) {

      }).fail(function() {
        //we can add a "fail" function to our AJAX request to do something if it fails
        $('#fail').text("We couldn't find anything for that topic.")
        console.log("we can't find anything")
      })
    }
    //reset the input
    $('#search-term').val('')
  })
})
