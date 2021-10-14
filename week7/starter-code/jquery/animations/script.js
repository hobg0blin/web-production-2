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
  console.log('hide button')
  $("#show-0").hide(2000)
})

$("#show").click(function() {
  $("#show-1").show("fast")
})

$("#toggle").click(function() {
  $("#show-2").toggle(500)
})

$("#fadeIn").click(function() {
  $("#show-3").fadeIn(3000)
})

$("#fadeOut").click(function() {
  $("#show-4").fadeOut(1500)
})

$("#fadeToggle").click(function() {
  $("#show-5").fadeToggle(1000)
})

  // fadeTo required parameters: speed (slow/fast/milliseconds), opacity
$("#fadeTo").click(function() {
  $("#show-6").fadeTo('slow', 0.3)

})

$("#slide").click(function() {
  // $("#show-7").slideUp(500)
  // $("#show-7").slideDown(500)
  $("#show-7").slideToggle("slow")
})

$("#animate").click(function() {

  $("#show-8").animate({
    opacity: '0.5',
    borderRadius: '15px',
    height: '+=20px'
  }, 'slow')

})

$("#callback").click(function() {
  $("#show-9").animate({
    opacity: '0.5',
    borderRadius: '15px',
    height: '+=20px'
  }, 2000, function() {
    $("#show-9").after("<p>Animation complete!</p>")
  })
})
