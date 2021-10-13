// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded
$(function() {
    $("#show-search").click(function() {
      let showName = $("#show-name").val()
      if (showName != '') {
        getShow(showName)
      }
      //reset the input
    $('#show-name').val('')
  })
 })

function getShow(showName) {
  $.getJSON(`https://api.tvmaze.com/search/shows?q=${showName}`, function(data) {
    console.log('data: ', data)
    //just getting 4 shows but we could use data.length to get all of them
    for (let i =  0 ; i < 4; i++) {
      // add some show data
      let show = data[i].show
      let showDiv = $(`<div class="show"><img src=${show.image.medium} /> <h4>${ show.name}</h4></div>`)
      let infoButton = $(`<button class="get-info">Get More Info</button>`)
      //append it to the container
      $('#show-container').append(showDiv)
      $("#show-container").append(infoButton)
      //now we add a function that, on a button click, makes a second API request using the ID from our first request.
      getInfo(infoButton, show.id)
    }
    }).fail(function() {
        console.log("that request failed")
    })
}

function getInfo(element, showId) {
  // we have to attach this to the specific button, so it knows which show to go to!
  element.click(function() {
    $.getJSON(`https://api.tvmaze.com/shows/${showId}/{your endpoint here}`, function(data) {
      console.log('data', data)
    })
  })
}
