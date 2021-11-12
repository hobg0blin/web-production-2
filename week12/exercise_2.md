## Playing With Twitter Bots
In the starter code, `cd` into `exercise-2`.

This default code uses a [markov chain]*(https://en.wikipedia.org/wiki/Markov_chain)  and the Rita.js package (https://rednoise.org/rita/) to generate random text from a string of words we feed it
Run `npm install` and `node app.js` to get it going in localhost and play around with generating sandwiches for a bit.
- Try making your own corpus variable to train the bot on - right now, it generates random sandwiches. I’ve included some sample code for using [corpora](https://github.com/dariusk/corpora) and [corpora-project](https://www.npmjs.com/package/corpora-project), if you want to try those out, but you can also try just writing your own, or copying and pasting text to put into the corpus variable.
- Play around with generating text with the corpus you’ve created on the frontend, and if you get anything really good, tweet it out to the account!
