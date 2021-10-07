## Introducing the Midterm

### - [Some APIs to choose from](apis.md)
### - [Sample Requests](AJAX_exercise.md)
### - [Samples from class](https://drive.google.com/file/d/12P8bUZlKlimvJX0EN9iGEuezo31ROGV-/view?usp=sharing)

### Inspiration

- [Covid-19 Tracker](https://viruscovid.tech/) - using open disease API, more related projects [here](https://github.com/disease-sh/awesome-novelcovid)
- [Pokedex](https://pokedex.org/) - a Pokedex using the PokeAPI
- [RhymeZone](https://rhymezone.com/) - uses the [DataMuse API](https://www.datamuse.com/api/) to find rhymes, synonyms, adjectives, and more
- [BigSexy Poems](https://bennadel.github.io/big-sexy-poems-poc/) - also uses the DataMuse API to help you write poetry
- [Prison Map](http://prisonmap.com/) - by [Josh Begley](https://joshbegley.com/), an artist who works with APIs and data


### The Midterm

**Create an interactive webpage that displays data from an external API and allows the user to interact with it. You’ll make a 5-10 minute presentation of your project to the class on October 28. This will be 25% of your grade for the semester!**

- You can pick an API from the list above, or research your own and use it (there are a few huge lists linked at the top to look through), or if you have a topic you’re interested in building a site for you can Google {topic} API and chances are it’ll be there.
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
- If you’re having trouble, google examples that use your API - chances are someone has used it before
- Bugs are to be expected - we’ll even have a debugging session after the midterm presentation. If you just can’t get something to work, you’re not going to fail.
- All these AJAX requests are doing, in the end, is creating JavaScript objects for you to put on the page - which, if you did assignment 5, you’ve already done!
- I’ll set aside time for help in the next two classes, plus my office hours are always available

## [This week’s assignment](assignment.md)
