## Likes & Comments Exercise

Let one person write the code while the others give input. You can swap out after 5 minutes or so.

To get started, in the starter code, `cd` into `exercise_1/` (to get to the top level of this folder, if you were in `form-starter-code`, you can just enter `cd ..`)

- Start by trying to add and display “likes” to each message.
- The code for making an AJAX request is already set up in `public/js/getMessages.js` as `likeHandler()` - note that we have to call any functions that interact with our template inside `getMessages()`, so that the jQuery attaches to the HTML after it renders!
- In `app.js`, in the `app.put(‘/like’)` request, try increasing the “likes” attribute on a message object when that route is requested.  
- In `messages.handlebars`, try displaying how many likes each message has. Don’t forget to add a backslash before your handlebars variable, like `\{{ likes}}` - this prevents the server from trying to render it beforehand!


Once you’ve gotten this far, try adding an input with a submit button that lets you add a comment or comments to each message.
- In getMessages.js, build out the `function commentHandler()` function at the bottom that attaches an AJAX handler to your input, then “puts” a comment to the `app.put(‘comment’)` route in line 80 of `app.js` - you’ll need to figure out how to get the object’s ID and add it to your URL so the route knows which message to modify!
- If you can successfully get comments added to your messages, try displaying them in the template in `messages.handlebars` - you’ll need an `{{ #each }}` loop to do so, since comments are in an array.

