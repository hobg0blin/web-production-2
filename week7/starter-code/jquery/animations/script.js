// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded
$(function() {
    let showName = 'csi'
    getShow(showName)
 })

let shows = []
function getShow(showName) {
  $.getJSON(`https://api.tvmaze.com/search/shows?q=${showName}`, function(data) {
    console.log('data: ', data)
    for (let i = 0; i < 10; i++) {
      $(`#show-${i}`).attr({src: data[i].show.image.medium})
      $(".show").show()
      $(".show").css({display: 'flex'})
    }
  }).fail(function() {

        //we can add a "fail" function to our AJAX request to do something if it fails
    console.log("that request failed")
  })
}

// most animations can take either milliseconds: e.g. $(element).hide(1000) will hide in one second, or "fast" or "slow"

$("#hide").click(function() {

})

$("#show").click(function() {

})

$("#toggle").click(function() {

})

$("#fadeIn").click(function() {

})

$("#fadeOut").click(function() {

})

$("#fadeToggle").click(function() {

})

  // fadeTo required parameters: speed (slow/fast/milliseconds), opacity
$("#fadeTo").click(function() {

})

$("#slide").click(function() {

})

$("#animate").click(function() {

})

$("#callback").click(function() {

})




