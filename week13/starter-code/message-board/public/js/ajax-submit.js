  $(document).ready(function(){

    getMessages()
    $('.messageContainer').on('submit', function(evt){
                evt.preventDefault();
                var action = $(this).attr('action');
                var $container = $(this).closest('.formContainer');
                $.ajax({
                    url: action,
                    type: 'POST',
                    data: $(this).serialize(),
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
    $('.commentContainer').on('submit', function(evt){
                evt.preventDefault();
                var action = $(this).attr('action');
                var $container = $(this).closest('.formContainer');
                $.ajax({
                    url: action,
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function(data){
                      console.log('comment output: ', data)
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
