## Todo App Exercise


In the starter code, `cd` into `todo-app` and run `npm install`.

Copy your database URI from the `.env` file in `message-board` into the `.env` file in `todo-app`.

Check out the `Todo.js` file in the `models/` folder to see the model for a todo item.

This to-do app is already set up to store whether or not it’s done: if you look in `public/js/ajax-submit.js`, every time you hit a checkbox, it makes a `put` request to our server, which updates the to-do item’s “isDone” attribute to be true.

To start, try not displaying items that have `isDone` set to true: in the template in `todo.handlebars`, you can use `\{{#unless isDone}}...\{{/unless}}` to not display them on the front-end.

Once you’re comfortable with that, try adding a new attribute to each item and displaying it, like the day of the week that it’s due or its priority level.

In `models/Todo.js`, you’ll need to update the model schema for your new attribute. For example, try adding
```
dueDay: {type: String}
```
or
```
priority: {type: Number}
```

Once you’ve updated your model, you’ll have to update the form in `todos.handlebars` to contain your new attribute, and the template at the top to display it: don’t forget to use a forward slash `\` before any values in the template so that it renders on the client side.

If you get this far, try adding a button to each todo item that deletes it: you’ll need to add a `DELETE` ajax request that fires when the button is pressed in `public/js/ajax-submit`. There’s already a `delete` route set up in `app.js`: `app.delete(‘/todo’)` in line 72. You’ll need to figure out how to add the `itemId` attribute to your AJAX `DELETE` request - you can see one example of this in the `PUT` request that updates `isDone`.
