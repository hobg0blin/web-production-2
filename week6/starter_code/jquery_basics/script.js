// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded

$(function() {

  $("body").css("background", "red")


  let color = $("body").css('color')
  console.log('color: ', color)

  $(".change-me").css('border', '3px dashed blue')

  $(".welcome, blockquote, #explanation").css('text-decoration', 'underline')

  $("#change-box").css({
    "border": '1px solid black',
    "border-radius": '15px'
  })
  $("#click-me").click(function() {
    $("#result").html("<div>You clicked me!</div>")
  })

  $('.box').click(function() {
    $(this).slideUp()
  })

  $('.box').dblclick(function() {
    $(this).hide()
  })

  console.log($("#img-caption").text())

  console.log($("#image-container").html())

  $("#change-image").attr( {src: 'img/cat_wearing_sunglasses.jpg'})
  $("#img-caption").text('A Secret Agent Cat')

  $("#appending-animals").append('<li>Cat</li>')

  $("#appending-animals").prepend('<li>Dog</li>')

  $("#change-image").before('<p>Look At This Cat</p>')

  $("#change-image").after('<p> Everyone Loves Him</p>')

  $("#change-image").remove()
  $("#img-caption").empty()

  $("#circle").addClass('circle')

  let div =$("<div></div>")
  let img = $("<img/>", {
    src: 'img/landscape.jpg',
    id: 'landscape-image'
  })
  img.appendTo(".create-image")

  $("#landscape-image").click(function() {
    $(this).addClass("grayscale")
  })


})
