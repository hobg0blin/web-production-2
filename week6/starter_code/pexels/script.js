//onload function
let apiKey = 'your key here'
$(function() {
  $("#img-search").click(function() {
    let searchTerm = $("#search-term").val()
    // reset fail on each search
    $("#fail").text('')
    // make sure the searchTerm isn't empty
    if (searchTerm !== '') {

        // we have to use an AJAX request here because we're using an API key
      $.ajax({
        url: `https://api.pexels.com/v1/search?query=${searchTerm}`,
        type: 'GET',
        dataType: 'json',
        headers: {
          "Authorization": apiKey
        }
      }).done(function(data) {
          let photos = data.photos
          for (let photo of photos) {
            let img = $("<img/>", {
              src: photo.src.medium
            })
            img.attr('class', 'output-image')
            img.appendTo('#images')
          }
        console.log('data: ', data)

      }).fail(function() {
        //we can add a "fail" function to our AJAX request to do something if it fails
        $('#fail').text("We couldn't find anything for that topic.")
        console.log("we can't find anything")
      })
    }
    //reset the input
    $('#search-term').val('')
  })
})
