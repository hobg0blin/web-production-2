// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded
$(function() {

  getAllPokemon()

})

// staying DRY: keep all our functions out of the Dom Load event
function getAllPokemon() {
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/`, function(data) {
    console.log('data:', data)
    let done = false
    // call the individual pokemon api with the names of the first 100
    for (let i=0; i < 100; i++) {
      getPokemon(data.results[i].name)
    }

  }).fail(function() {
    console.log("We couldn't find that pokemon")
  })
}

function getPokemon(pokemonName) {
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
    console.log('data: ', data)
    // create our HTML
    let pokemonDiv = $(`<div class="pokemon"><img src=${data.sprites.front_default} /><h3 class="capitalize">${data.name}</h3>"`)
    let types = $("<ul class='types'><h4> Types</h4></ul>")
    //append types
    for (let object of data.types) {
      $(types).append(`<li class="capitalize">${object.type.name}</li>`)
    }
    let abilities = $("<ul class='abilities'><h4>Abilities</h4></ul>")
    //append abilities
    for (let object of data.abilities) {
      $(abilities).append(`<li class="capitalize">${object.ability.name}</li>`)
    }
    pokemonDiv.append(types)
    pokemonDiv.append(abilities)
    $("#pokemon-container").append(pokemonDiv)
    // since all of our HTML is being created in this function, we attach our event handlers inside this function - each pokemon div gets the handlers attached to it
    attachEvents(pokemonDiv)
  }).fail(function() {
    console.log("We couldn't find that pokemon")
  })
}

function attachEvents(element) {
  element.hover(function() {
    // try fading in and out, sliding up and down instead of just show and hide
    // try adding an animation to $(this) or a child element
    // you can use "find" to get a child element - so in this case we're taking an instance of .pokemon and finding the class .type within it
    $(this).find('.types').show()
  },
    function() {
      $(this).find('.types').hide()
    }
  )

}
