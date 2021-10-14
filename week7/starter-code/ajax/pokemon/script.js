//onload function
$(function() {
  $("#pokemon-search").click(function() {
    let pokemonName = $("#pokemon-name").val()
    // make sure the name isn't empty
    if (pokemonName !== '') {
      getPokemon(pokemonName)
    }
    //reset the input
    $('#pokemon-name').val('')
  })
})

function getPokemon(pokemonName) {
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
    console.log('data: ', data)
    $("#pokemon-img").attr({src: data.sprites.front_default})
    $("#name").text(data.name)
    for (let object of data.types) {
      $("#type").append(`<li class="capitalize">${object.type.name}</li>`)
    }
    $("#pokemon").show()
    getCharacteristics(data.id)
  }).fail(function() {
    console.log("We couldn't find that pokemon")
  })
}

function getCharacteristics(pokemonId) {
  $.getJSON(`https://pokeapi.co/api/v2/characteristic/${pokemonId}`, function(data) {
    console.log('data: ', data)
    for (let description of data.descriptions) {
      if (description.language.name == 'es') {
        $("#characteristics").append(description.description)
      }
    }
  }).fail(function() {
    console.log("We couldn't find that pokemon's characteristics.")
  })
}
