## Setup

Download the [starter code](https://drive.google.com/file/d/1lsyAjtnosx8J2gVZOQaB1aT-faFKRChj/view?usp=sharing), open it in Atom, and `cd` into it in the terminal.

### Get/Post, Talking To The Frontend

1. Tutorial

To follow along, `cd` into `form-starter-code` in the starter code and run `npm install` and `node app.js`

2. [Exercise](exercise_1.md)

### Working With External APIs

1. Tutorial - adding an external API to your frontend

To following along, `cd` into `external-api` int he starter code and run `npm install` and `node app.js`

2. Tutorial - fun with bots, server-side-scripting

To follow along with part 1, `cd` into `twitter-bot-frontend` in the starter code and run `npm install` and `node app.js`

To follow along with part 2, `cd` into `twitter-bot-server` in the starter code and run `npm install` and `node app.js`

3. [Exercise]()


### Reading
- [Web Development With Node & Express](https://drive.google.com/file/d/1ip-1kA9k3VzpIOL0gczB09umHAgw_r5a/view?usp=sharing) - Revisit Ch.7, p.81-83 (client-side templates), read Ch. 8, Form Handling (it’s still a useful reference, but some of the code in this book is a bit out of date, so when in doubt, stick with the code in the assignment or starter code over copying code directly from the book).
)
- [Understanding and Using REST APIs](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)

### Reference
- [Building a REST API with Node & Express](https://stackabuse.com/building-a-rest-api-with-node-and-express/)
- [NPM Sentiment Package](https://www.npmjs.com/package/sentiment#api-reference)
- [Rita.js](https://rednoise.org/rita/)
- [Tracery](https://www.npmjs.com/package/tracery) - another generative text package you can try out!
- [Programming from A to Z - Twitter API and Twitter Bots](https://shiffman.net/a2z/twitter-bots/), [Deploying a Bot to Heroku](https://shiffman.net/a2z/bot-heroku/) - this whole book is a useful reference, but these are great for specifically Twitter bots
- [Axios API reference](https://axios-http.com/docs/api_intro)
- [Create a Twitter Bot Using Node.js and deploy on Heroku](https://medium.com/nerd-for-tech/create-twitter-bot-using-nodejs-and-deploy-on-heroku-dd6ec31534f4) - this is helpful, but doesn’t go over setting your environment variables on Heroku, which you’ll need to do if you’re using a .env file - instructions for that [here](https://devcenter.heroku.com/articles/config-vars)



### Inspiration
- [Your World of Text](https://www.yourworldoftext.com/)
- [Everest Pipkin’s Twitter Bots](https://everest-pipkin.com/#projects/bots.html)
- [What it Means to Be an ‘Experimental Computer Poet’](https://www.vice.com/en/article/8x8ppp/poetry-twitter-bots-best-twitter-bots-art-allison-parrish-everyword)
- [Bots: a definition and some historical threads](https://points.datasociety.net/bots-a-definition-and-some-historical-threads-s7738c8ab1ce)
- [12 Weird, Excellent Twitter Bots](https://nymag.com/intelligencer/2015/11/12-weirdest-funniest-smartest-twitter-bots.html)

### Assignment

### Option 1: Your Very Own World Of Text
- Using the [starter code](), create your own world of text/message board/social network/collaborative poetry app, whatever you’d like it to be!
- Modify the styling and code/templates to reflect what you’d like your project to be - if it’s a social network or message board, give it a name. If it’s a giant collaborative poem, change the title and form HTML to reflect that!
- Add at least one new attribute to the form in `messages.handlebars`, make sure it gets added to the `messages` object in app.js, and display it in the handlebars template in `messages.handlebars`.
-  Try adding a new element with an AJAX function that goes to a `put` route in `app.js` to modify an object, like a button to add likes to an object or an input to add comments - check the [tutorial code](), specifically `edit-messages` and `app.put(‘messages’)` in line 101 of `app.js` if you’re having issues.

### Option 2: Bot Prototype
**Important: if you want to make a Twitter bot, you’ll need to [apply for API access](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api) pretty much ASAP - you’ll have to go back and forth with them over email for a day or two to get your key, just tell them your project is creative/artistic/educational and try and be specific about what you’re building, e.g. “I’m building a generative text bot with Node.js for a course at Hunter College”**
- You can make a Twitter bot following the [tutorial code]() from class, or try your hand at making a [Discord Bot](https://www.sitepoint.com/discord-bot-node-js/), a texting bot with [Twilio](https://www.twilio.com/blog/2018/03/sms-bot-node-texteverything.html), or a bot for another platform of your preference.
- If you can’t get developer access and still want to try, you can use the .env file for the class Twitter account from the starter code.
- If you make a Twitter bot, or a bot that uses an API key, you’ll need to set your .env variables **in heroku*** for it to work, and set it up as a “worker” instead of a web app - more instructions on that [here](https://medium.com/nerd-for-tech/create-twitter-bot-using-nodejs-and-deploy-on-heroku-dd6ec31534f4) and [here](https://devcenter.heroku.com/articles/config-vars)
- If you follow the Twitter bot starter code, make it your own - try customizing what it generates, or tweeting from another API - you can check this week’s inspiration for more things to try.
- If you make a Twitter bot, for your “hosted online” send a link to the bot’s account - if you’re trying a different service, send a screenshot or blog post explaining what it does
- If you’re having trouble deploying your bot to Heroku, or just getting it to work, don’t worry too much about it - this is meant to be a prototype, and they don’t always work!

