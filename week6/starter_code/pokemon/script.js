//onload function
$(function() {
  $("#pokemon-search").click(function() {
    let pokemonName = $("#pokemon-name").val()

      if (pokemonName !== '') {
        $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
          console.log('data: ', data)
          $("#pokemon").attr({src: data.sprites.front_shiny})
        }).fail(function() {
          console.log("that pokemon doesn't exist")
      })
    }
    //reset the input
    $('#pokemon-name').val('')
  })
})
