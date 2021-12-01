$(document).ready(function(){
  console.log('foo')
    getMessages()
});

function getMessages() {
  let messageContainer = $("#messages")
  messageContainer.html('')
    var messageTemplate = Handlebars.compile(
				$('#messageTemplate').html());

    console.log('message template: ', messageTemplate)
    $.ajax('/data/messages', {
					success: function(data){
            console.log('data: ', data)
						messageContainer.append(messageTemplate(data))
            setUpHandlers()
					}
				});

}
function setUpHandlers() {
  $('.submit').on('click', function(evt){
      console.log('foo')
      evt.preventDefault();
    console.log('this: ', this)
      let $container = $(this).parents('.formContainer');
      let messageForm = $(this).parents('.messageContainer')
    console.log('message form: ', messageForm)
      $.ajax({
        url: '/message/',
        type: 'PUT',
        data: messageForm.serialize(),
          success: function(data){
              if(data.success){
                console.log('foo')
                getMessages()
                          $container.html('<h3>Thanks!</h3>');
                        } else {
                            $container.html('There was a problem.');
                        }
                    },
                    error: function(){
                        $container.html('There was a problem.');
                    }
                });
            });
                $('.delete').on('click', function(evt){
                evt.preventDefault();
                var $container = $(this).closest('.formContainer');
      let messageForm = $(this).closest('.messageContainer')
                  console.log('message form: ', messageForm.serialize())

                $.ajax({
                  url: '/message',
                    type: 'DELETE',
					data: messageForm.serialize(),
                    success: function(data){
                        if(data.success){
                          getMessages()
                          $container.html('<h3>Thanks!</h3>');
                        } else {
                            $container.html('There was a problem.');
                        }
                    },
                    error: function(){
                        $container.html('There was a problem.');
                    }
                });
            });
}
