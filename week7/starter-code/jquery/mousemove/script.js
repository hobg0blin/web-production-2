// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded
$(function() {

// mouseenter and mouseleave
$('#mouse-test').mouseenter(function() {

})

$('#mouse-test').mouseleave(function() {

})

// or just chain them with hover

$('#mouse-test').hover(function() {
}, function() {
}
)


// getting an image to track the mouse
getPokemon('charizard', '#pokemon')

let mouseX = 0
let mouseY = 0
let follow = false;

$(document).mousemove(function(e){
  mouseX = e.pageX
  mouseY = e.pageY
  console.log('mouseX: ', mouseX)
  console.log('mouseY: ', mouseY)
 })
// keep our code DRY - keep functions out of the DOM load code
function getPokemon(pokemonName) {
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
    console.log('data: ', data)
    $("#pokemon-img").attr({src: data.sprites.front_default})
    $("#name").text(data.name)
    for (let object of data.types) {
      $("#type").append(`<li class="capitalize">${object.type.name}</li>`)
    }
  }).fail(function() {
    console.log("We couldn't find that pokemon")
  })
}

