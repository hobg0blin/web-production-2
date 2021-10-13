// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded
$(function() {


  // detecting keypress events

  let pokemonImg = $("#pokemon")
  $(document).keypress(function(event)
  {
    key = String.fromCharCode(event.which)

    if (key >= 'a' && key <= 'z' ||
        key >= 'A' && key <= 'Z' ||
        key >= '0' && key <= '9')
    {
      console.log('key: ', key)
      event.preventDefault()
    }
  })
})
//Staying DRY:
//keep our functions out of the main document code
function getPokemon(element, pokemonName) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
      console.log('data: ', data)
      $("#pokemon").attr({src: data.sprites.front_default})
    })
  }

