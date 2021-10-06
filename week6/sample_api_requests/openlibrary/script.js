//onload function
$(function() {
  $("#book-search").click(function() {
    let searchTerm = $("#genre").val()
    $("#fail").text('')
    // make sure the searchTerm isn't empty
      if (searchTerm !== '') {
        // here we pass the API the topic as our "query"
        $.getJSON(`https://openlibrary.org/subjects/${searchTerm}.json`, function(data) {
          //but, depending on what we search, we could get thousands of things or nothing
          //so we should account for the first case
          console.log('data: ', data)
          if (data.works.length <= 0) {
              $('#fail').text("We couldn't find anything for that topic.")
          } else {
            //let's just append the first 3
            for (let i = 0; i < 3; i++) {
              let work = data.works[i]
              $('#recommendations').append('<li>' + work.title + ' by ' + work.authors[0].name + '</li>')
            }
          }

          // this could return
      }).fail(function() {
        //we can add a "fail" function to our AJAX request to do something if it fails
        $('#fail').text("We couldn't find anything for that topic.")
        console.log("we can't find anything")
      })
    }
    //reset the input
    $('#genre').val('')
  })
})
