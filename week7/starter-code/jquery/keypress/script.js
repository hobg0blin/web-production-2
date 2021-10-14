// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded
$(function() {


  // detecting keypress events
  let pokemonImg = $("#pokemon")
  getPokemon(pokemonImg, 'charizard')
  $(document).keypress(function(event)
  {
    key = String.fromCharCode(event.which)

    if (key >= 'a' && key <= 'z' ||
        key >= 'A' && key <= 'Z' ||
        key >= '0' && key <= '9')
    {
      console.log('key: ', key)
      $("#key-result").html('You pressed: '+ key)
      event.preventDefault()
    }

    switch(key) {
      case 'w':
        pokemonImg.css({'top': '-=5'})
        break;
      case 'a':
        pokemonImg.css({'left': '-=5'})
        break;
      case 's':
        pokemonImg.css({'top': '+=5'})
        break;
      case 'd':
        pokemonImg.css({'left': '+=5'})
        break;
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
