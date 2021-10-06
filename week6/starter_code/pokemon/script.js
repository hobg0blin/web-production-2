//onload function
$(function() {
  $("#pokemon-search").click(function() {
    let pokemonName = $("#pokemon-name").val()
    // make sure the name isn't empty
      if (pokemonName !== '') {
      // since we're usually making a get request, and it's usually going to be JSON, we can just use getJSON as shorthand
        // here we pass the API the pokemon name as our "query"
        $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
      }).fail(function() {
        //we can add a "fail" function to our AJAX request to do something if it fails
        console.log("that pokemon doesn't exist")
      })
    }
    //reset the input
    $('#pokemon-name').val('')
  })
})
