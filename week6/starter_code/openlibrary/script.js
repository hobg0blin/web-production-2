//onload function
$(function() {
  $("#book-search").click(function() {
    let searchTerm = $("#genre").val()
    $("#fail").text('')
    // make sure the searchTerm isn't empty
      if (searchTerm !== '') {
        // here we pass the API the topic as our "query"
        $.getJSON(`https://openlibrary.org/subjects/${searchTerm}.json`, function(data) {
          console.log('data: ', data)


        }).fail(function() {
          $('#fail').text("We couldn't find anything for that topic.")
          console.log("we can't find anything")
        })
    }
    //reset the input
    $('#genre').val('')
  })
})
