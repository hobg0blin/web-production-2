## Basic Routing & Templating Exercise

- In the starter code, `cd` into `exercise-1`, and run `npm install` and `node app.js` - it’ll be running in your browser at `localhost:3000`. For each route that you add, you should be able to see the result by going to, for example, `localhost:3000/hello` or `localhost:3000/about`.
- Don’t forget that you have to restart your server when you make changes to `app.js` - just hit `Ctrl + C` in the running server in the terminal, then run `node app.js` again
- In your groups, start by taking turns sending each other a message in the `app.get(/hello)` route in line 25 - just enter `res.send(“Your message”)`. Show each other your messages when you’re done.
- In home.handlebars, add HTML with a simple message about yourself with your name and a fun fact about you.
- Add a route to this file: in the app.get(‘/’) route in line 29, enter `res.render(“home”)`
- Show each other your homepages when you’re done.
- Add some more facts about you to the `about.handlebars` page, and then add your favorite food to the `about-me` partial and add that to the about page using the partial notation: `{{> about-me }}`
- Add a route to the about page: in the app.get(‘/about’) route in line 33, add `res.render(“about”)`
- Finally, add a new partial - an image of yourself, or something you’d like to add on every page - and add it to the `home` and `about` templates using the partial syntax = `{{> your-partial}}`.
- Show your simple new homepage to your group and help each other debug any issues.
- If there’s time remaining, try adding some JavaScript/jQuery or CSS in the `public` folder to make your page more interactive! You can reference files in the public folder using the relative folder that contains them in your handlebars file, like `<script src=”js/my-script.js”></script>` or `<link rel=”stylesheet href=”css/my-styles.css”`.


