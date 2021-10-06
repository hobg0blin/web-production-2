//onload function
$(function() {
  $("#word-search").click(function() {
    let searchWord = $("#word").val()
    let searchLetter = $("#letter").val()
    // reset fail on each search
    $("#fail").text('')
    // make sure the searchTerm isn't empty
      if (searchWord !== '' || searchLetter !== '') {
        // This API takes multiple potential queries, so we can add two here: ml, which gets related words or "means like", and sp, which by adding the asterisk at the end, tells it to search only for words starting with our search letter
        $.getJSON(`https://api.datamuse.com/words?ml=${searchWord}&sp=${searchLetter}*`, function(data) {
          console.log('data: ', data)
          for (let obj of data) {
            $("#similar-words").append("<li>" + obj.word +  "</li>")
          }
      }).fail(function() {
        //we can add a "fail" function to our AJAX request to do something if it fails
        $('#fail').text("We couldn't find anything for that topic.")
        console.log("we can't find anything")
      })
    }
    //reset the input
    $('#word').val('')
    $('#letter').val('')
  })
})
