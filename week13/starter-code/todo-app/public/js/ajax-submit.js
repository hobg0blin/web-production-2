$(document).ready(function(){
  getTodos()
  setUpHandlers()
    $('.todoContainer').on('submit', function(evt){
      console.log('foo')
        evt.preventDefault();
        var action = $(this).attr('action');
        var $container = $(this).closest('.formContainer');
        $.ajax({
            url: action,
            type: 'POST',
            data: $(this).serialize(),
            success: function(data){
                if(data.success){
                  getTodos()
                  $container.html('<h3>Added to list!</h3>');
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

function getTodos() {
  let todoContainer = $("#todos")
  todoContainer.html('')
    var todoTemplate = Handlebars.compile(
    $('#todoTemplate').html());

    $.ajax('/data/todos', {
					success: function(data){
            console.log('data: ', data)
						todoContainer.append(todoTemplate(data))
            setUpHandlers()
					}
				});


}
function setUpHandlers() {
  console.log('foo')

    $('.form-check-input').on('click', function(evt){
      let action = '/todo';
      console.log($(this))
      console.log('id: ', $(this).attr('id'))
      console.log('checked: ', $(this).is(':checked'))
      let data = {itemId: $(this).attr('id'), isDone: $(this).is(':checked')}
        $.ajax({
            url: action,
            type: 'PUT',
            data: data,
            success: function(data){
              console.log('comment output: ', data)
                if(data.success){
                  getTodos()
                } else {
                  console.log('error')
                }
            },
            error: function(){
              console.log('error')
            }
        });
    });
}
