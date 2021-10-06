## Introducing the Midterm

[Some APIs to choose from](apis.md)

### Inspiration

- [Covid-19 Tracker](https://viruscovid.tech/) - using open disease API, more related projects [here](https://github.com/disease-sh/awesome-novelcovid)
- [RhymeZone](https://rhymezone.com/) - uses the [DataMuse API](https://www.datamuse.com/api/) to find rhymes, synonyms, adjectives, and more
- [BigSexy Poems](https://bennadel.github.io/big-sexy-poems-poc/) - also uses the DataMuse API to help you write poetry
- [Prison Map](http://prisonmap.com/) - by [Josh Begley](https://joshbegley.com/), an artist who works with APIs and data


### The Midterm

**Create an interactive webpage that displays data from an external API and allows the user to interact with it. You’ll make a 5-10 minute presentation of your project to the class on October 28.**


- You can pick an API from the list above, or research your own and use it (there are a few huge lists linked at the bottom to look through, or if you have a topic you’re interested in building a site for you can Google {topic} API and chances are it’ll be there.
- Your API should return an object with multiple keys, or an array with multiple objects - sorry, no Kanye API for the midterm.
- You can make a live request to the API (as in the Pokedex example), or download the JSON in advance (if that makes sense for your project) - more details on downloading JSON [here](local_json.md)
- User interaction can mean a lot of things, and should depend on the API and the project:
  - For example: if you choose to make a Pokedex using the Pokedex API, users should be able to search for a Pokemon and have things like its type, stats, image, and more be displayed on the page.
  - On the other hand, if you chose to use the COVID data API, you could create an interactive visualization with p5.js, or show different data based on what the user selects.
- You can use your own HTML and CSS (and try and make it look good), but your code should also change HTML and CSS on the page. (This should happen automatically by adding content from an API/JSON, but things like changing classes with JavaScript/jQuery, manipulating the page based on user input, or adding animations, are encouraged)
  - For example: in the Pokedex example, you could change the color of the Pokedex entry based on the Pokemon’s type.

#### Grading Rubric:

- 45% fit and finish: does it look good? Does it do what you set out to do? Does it meet the specs laid out in the midterm assignment? 
- 40% presentation: you’ll give a 5-10 minute presentation that
  - Shows and explains the final work
  - Walks us through your code and development process 
  - Walks us through the problems you ran into and how you solved (or didn’t solve) them. Bugs are to be expected! Tell us what went wrong!
- 15% creativity of concept/implementation: is it a creative concept or implementation? This can mean doing something creative conceptually, doing something interesting or advanced with your code/CSS/HTML, or making animations/graphics with jQuery/p5/CSS. This also includes keeping your code DRY: turning lines you keep repeating into functions, using loops and variables to make your code more readable and efficient.

#### If You’re Worried

- You’ve got three weeks!
- Bugs are to be expected - we’ll even have a debugging session after the midterm presentation. If you just can’t get something to work, you’re not going to fail.
- All these AJAX requests are doing, in the end, is creating JavaScript objects for you to put on the page - which, if you did assignment 5, you’ve already done!
- I’ll set aside time for help in the next two classes, plus my office hours are always available

## This Week’s Assignment - Quick Prototype & Proposal 

- Pick an API and start getting familiar with it - read the docs, think about what you could build with it.
- If you’re not using one of the APIs from the examples, try making call to the API with the [sample AJAX request](https://drive.google.com/file/d/1U-SWOjupG3vuycC2OOKLKnjlW32-Ff04/view?usp=sharing), log the data in the console, and display data from it on a page using jQuery - if you use one of the APIs from the examples, display something else from that API call (e.g. in the Pokemon example, add the Pokemon’s type to the page).
- If you’ve picked an API and are having trouble getting it to work, leave a comment with the error you’re having (or try a different API)
- **Separately**: Once you’ve done some research and played with API calls, [email me](mailto:bb2357@hunter.cuny.edu) a short (~300 word) proposal for your midterm. Include the API you’re planning to use, what your app will do, any challenges/issues you might face, and how you plan to get there. Come to class next week ready to discuss your proposal.

#### Submission

- In your web production 2 folder, create a folder called `week6`
- **IMPORTANT**: if you’re using an API with a key, delete it and put a placeholder - people love to steal API keys from GitHub. Send me your key separately in your email
- Put your quick prototype in the `week6` folder and commit and push to GitHub
- Check and make sure it uploaded to your GitHub page - it should be at {your github username}.github.io/week5/
- Submit the link [here](https://docs.google.com/forms/d/e/1FAIpQLScJ_hzjToD08UX5Py2QP4t8VhiKaIAHZNn6dQVUQbSerfHgrA/viewform?usp=sf_link)

## Reference
- [jQuery Cheatsheet](https://oscarotero.com/jquery/)
- [jQuery HTML/CSS Reference](https://www.w3schools.com/jquery/jquery_ref_html.asp)
- [jQuery AJAX reference](https://www.w3schools.com/jquery/jquery_ref_ajax.asp)
- [Some APIs to choose from](apis.md)
- [JSON vs. JSONP](https://stackoverflow.com/questions/2887209/what-are-the-differences-between-json-and-jsonp)

#### If you’re interested in using p5
- [loadJSON](https://p5js.org/reference/#/p5/loadJSON)
- [Working With APIs in JavaScript (Video)](https://www.youtube.com/watch?v=ecT42O6I_WI&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=5)
- [Data & APIs - Dan Shiffman](https://shiffman.net/a2z/data-apis/)
- [p5 API examples - Dan Shiffman](https://editor.p5js.org/a2zitp/collections/cgfJWhpsE)

## Reading

#### jQuery

(There’s a lot of these, but they’re all pretty short and part of the [w3Schools jQuery tutorial](https://www.w3schools.com/jquery/default.asp), which is a pretty useful reference)

- [jQuery Syntax](https://www.w3schools.com/jquery/jquery_syntax.asp)
- [jQuery Selectors](https://www.w3schools.com/jquery/jquery_selectors.asp)
- [jQuery Get](https://www.w3schools.com/jquery/jquery_dom_get.asp)
- [jQuery Set](https://www.w3schools.com/jquery/jquery_dom_set.asp)
- [jQuery Add](https://www.w3schools.com/jquery/jquery_dom_add.asp)
- [jQuery CSS Classes](https://www.w3schools.com/jquery/jquery_css_classes.asp)
- [jQuery css()](https://www.w3schools.com/jquery/jquery_css.asp)
#### AJAX
- [Beginning jQuery - jQuery and AJAX](https://drive.google.com/file/d/10zPmSaGSsw_ODXEc2dqmCBdQ64FqQFvb/view?usp=sharing)


