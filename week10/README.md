## Setup

- If you haven’t already, make sure to set up Node & Heroku following the instructions from [week 8](../week8/).
- [Starter Code For Today](https://drive.google.com/file/d/1aKBWAuHGvv7TdECbt9vtgFe1Fp7XQ0eo/view?usp=sharing)
- Download the starter code
- `cd` into it in the terminal (on a Mac, this should be `cd Downloads/w10-starter-code`)
- Run `npm install` to install the packages
- Run `node app.js` to start the server
- Hit `Ctrl + C` to stop the server - you’ll need to restart the server by stopping it and running `node app.js` again any time you make changes to your server.
- If you missed week 8 and haven’t gone through this process/are getting hung up on it, check the setup instructions from [week 8](../week8).

## Today’s Class

### Make-Up Presentations

### Routing and Templating With Node & Handlebars

1. Basic Routing & Templating - [Notes](notes-basic.md)
  - Follow along with the starter code
  - [Exercise](exercise-1.md)
2. Sending Data From The Server - [Notes](notes-server.md)
  - Follow along with the starter code
  - [Exercise](exercise-2.md)

## Reading
- If you’re getting stuck or confused, revisit [week 8](../week8/) - there are tons of resources there.
- [Server Basics Notes](notes-basic.md)
- [Complex Server Notes](notes-server.md)
- [Web Development With Node & Express](https://drive.google.com/file/d/1ip-1kA9k3VzpIOL0gczB09umHAgw_r5a/view?usp=sharing) - Ch. 3 (Saving Time With Express), Ch. 7 (Templating With Handlebars) - it’s still a useful reference, but some of the code in this book is a bit out of date, so when in doubt, stick with the code in the assignment or starter code over copying code directly from the book.
- [Routing With Express](https://expressjs.com/en/guide/routing.html)

## Reference
- [Bootstrap Documentation](https://getbootstrap.com/docs/3.4/css/#overview)
- [Bootstrap Tutorial](https://www.w3schools.com/bootstrap/default.asp)
- [Handlebars Guide](https://handlebarsjs.com/guide/)
- [Templating With Handlebars](https://css-tricks.com/lodge/learn-jquery/23-templating-handlebars/)
- [What is NPM? NPM Tutorial for beginners](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
- [Intro to Express & Node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Give Me A Joke NPM Package](https://www.npmjs.com/package/give-me-a-joke)
- [RandomColor NPM Package](https://www.npmjs.com/package/randomcolor)

## Inspiration
- [Isabel Moranta Portfolio](https://isabelmoranta.com/) - uses Node & Express
- [Climate Pledge Website](https://www.theclimatepledge.com/) - uses Node, Express & Handlebars
- [Awwwards for Node.js websites](https://www.awwwards.com/websites/node-js/)
- [Depression Quest](http://www.depressionquest.com/dqfinal.html)
- [You Are Jeff Bezos](https://direkris.itch.io/you-are-jeff-bezos)
- [20 Best Interactive Story Games](https://www.pcmag.com/picks/the-20-best-interactive-story-games)
- [Top Interactive Fiction Games on Itch.io](https://itch.io/games/html5/tag-interactive-fiction)

## Assignment

### Option 1: Prototype portfolio site

- Using the [assignment starter code](https://drive.google.com/file/d/17iu29C0HHS05ZSJ_BelyLZ9SLEHM8RBx/view?usp=sharing), build a prototype of a portfolio site using Node and Handlebars - this is already set up for all the functionality, you just have to modify it to be about you!
- Modify the about and home pages to be about your own creative work, whether it’s in this class or in general.
- Add at least one partial to `views/partials` and display it on multiple pages (this could be an image of you, or a link you want to reuse across pages)
- In line 16 of app.js, modify the `ListOfWorks` to contain links, images, titles, and any other attributes you’d like to pass to a page that displays your portfolio. Add at least 3 objects to the array and least one new attribute to each object (like a description or a hashtag). This can just be your assignments for this class so far, or you can make it about any other projects you’d like to link to.
- Make sure to put any images in `public/img`.
- Display the objects and new attributes in either the `views/works` template in the `{{#each}}` loop, or on separate pages using the `views/work` template. (or feel free modify each page to do both!)
- In line 26, modify the `moreInfo` variable to display facts about yourself in the `about.handlebars` template.
- Feel free to add your own styles or frontend JavaScript in the `public/` folder, or build out the site more as you see fit!

### Option 2: Multipage Story 

- Using the [assignment starter code](https://drive.google.com/file/d/1089dew0OMGUwgSZvjq0X_yOzUfKIX80y/view?usp=sharing), build a multipage story using Node and Handlebars- this is already set up for all the functionality, you just have to modify it to be about you!
- Modify the `about` and `home` pages to be about your story.
- Add at least one partial to `views/partials` and display it on multiple pages (this could be an image of you, or a link you want to reuse across pages)
- Modify the `moreInfo` variable in line 29 of `app.js` to be about your story, and check that it displays in the about page.
- Using the `story` variable in line 38 of `app.js`, add at least four objects to your story and one new attribute to each object- like adding a “title” or more text to the story. Make sure to display the new attribute in the `page` template.
- Make sure to put any images in the `public/img` folder.
- Try and see if you can create a “previous page” variable in the page route (at line 40) and link to it in the page template.
- Feel free to add your own styles or frontend JavaScript in the `public/` folder, or build out the site more as you see fit!

### Submission

- It might be easiest to create a new GitHub repository for this assignment in Atom, or you can copy it over to your existing repo for server-side work. 
- Once you’ve committed and pushed it to GitHub, make sure to push it to Heroku following the instructions from [week 8](../week8) (navigate to the folder you’re using in the terminal and enter `heroku create` (if you’re using the same GitHub repository from week 8, you can skip the `heroku create` step) and `heroku push`) and use the Heroku link as your “link to hosted assignment” when you submit to the [Homework Form](https://forms.gle/DMcG64NvRdbSjsq57).
- If you’re having trouble with Heroku, just make a note of it in your homework submission and we’ll set aside some time to debug next week.
