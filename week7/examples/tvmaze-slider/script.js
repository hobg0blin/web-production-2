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
          shows.push(data)
          addHandlers(data)
    }).fail(function() {
      //we can add a "fail" function to our AJAX request to do something if it fails
      console.log("that request failed")
    })
}

function addHandlers(array) {
  $("#prev").show()
  $("#next").show()
  let showIndex = 0
  changeShow(array[showIndex])
   $("#next").click(function() {
    showIndex++
    if (showIndex >= array.length) {
      showIndex = 0;
    }
    transition("#show-container", array[showIndex])
  })
  $("#prev").click(function() {
    showIndex --
    if (showIndex < 0) {
      showIndex = array.length - 1
    }
    transition("#show-container", array[showIndex])
  })

}


function changeShow(object) {
   $("#show-image").attr({src: object.show.image.medium})
  $("#show-title").text(object.show.name)
}

function transition(element, object) {
  $(element).animate({
    "opacity": 0,
    "height": 0
  }, {
    "duration": 500,
    "easing": "linear",
    "complete": function() {
      changeShow(object)
      transitionIn(element)
    }
  })
}

function transitionIn(element) {
  $(element).animate({
    "opacity": 100,
    "height": "400px"
  }, {
    "duration": 500,
    "easing": "linear",
    "complete": function() {
        console.log('finished')
    }
  })
}
