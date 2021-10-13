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
          if (data.works.length <= 0) {
              $('#fail').text("We couldn't find anything for that topic.")
          } else {
            console.log('data: ', data)
            //let's just append the first 3
            for (let i = 0; i < 3; i++) {
              let work = data.works[i]
              $('#recommendations').append(`<li id="recommendation-${i}">` + work.title + ' by ' + work.authors[0].name + `</li><button id=work-${i}>See the Cover</button>`)
              //use our for loop number to set an ID for the work, then attach on onclick to it
              $(`#work-${i}`).click(function() {
                getCover(work.cover_id, `#recommendation-${i}`)
              })
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

function getCover(coverId, elementId) {
  //this api just returns images, so all we have to do is plug in the ID
  let src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
  $(elementId).after(`<img src=${src}>`)
}
