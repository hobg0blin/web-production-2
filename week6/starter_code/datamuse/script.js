//onload function
$(function() {
  $("#word-search").click(function() {
    let searchWord = $("#word").val()
    let searchLetter = $("#letter").val()
    $("#fail").text('')

      if (searchWord !== '' || searchLetter !== '') {
        $.getJSON(`https://api.datamuse.com/words?ml=${searchWord}&sp=${searchLetter}*`, function(data) {

          console.log('data: ', data)
          for (let obj of data) {
            $("#similar-words").append("<li>" + obj.word + "</li>")
          }

        }).fail(function() {

        $('#fail').text("We couldn't find anything.")
        console.log("we can't find anything")

      })
    }
    //reset the inputs
    $('#word').val('')
    $('#letter').val('')
  })
})
