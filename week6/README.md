## Housekeeping

[Feedback form](https://forms.gle/VUoAmSrS1YbuD3ts8) - optional and **anonymous** form for you to give feedback on the class so far, what’s working for you or isn’t, what you’d like to focus on going forward, etc.

## Today’s Class - [starter code](https://drive.google.com/file/d/1lZ2iwINVhRHON7Yr1cdWqDIs261Vpg1o/view?usp=sharing)

### Part 1: A basic introduction to jQuery - [notes](jquery.md), [tutorial code](https://drive.google.com/file/d/1tJUfZcFUkt-r6O-Y47HJw-xF5fy_LgkZ/view?usp=sharing)
- 1: Open the `jquery_basics` folder in the [starter code](https://drive.google.com/file/d/1lZ2iwINVhRHON7Yr1cdWqDIs261Vpg1o/view?usp=sharing) and follow along in Atom and the browser.

- 2: Talking about and playing with the [example code](https://drive.google.com/file/d/1rSvaNAPFmz5IOay5lTCQz_wVXcbn7N-A/view?usp=sharing) - jQuery implementations of last week’s assignment.
  - For the story, see if you can figure out how the sentences build on each other, or play with the jQuery style changes and animations. 
  - For the image collage, note how the styles and positioning are applied using jQuery. Try changing it around, or adding a new attribute and adding that to the styles. Try adding a new class in the `click()` function.

- [jQuery inspiration](https://www.awwwards.com/websites/jquery/)

### Part 2: Intro to AJAX - [notes](AJAX.md), [tutorial code](https://drive.google.com/file/d/12P8bUZlKlimvJX0EN9iGEuezo31ROGV-/view?usp=sharing)
- 1: Follow along in each folder - check out the linked API documentation as well
  - `kanye` - a simple AJAX request using [kanye.rest](https://kanye.rest/)
  - `pokemon` - using $.getJSON and user input with the [PokeApi](https://pokeapi.co/docs/v2#pokemon)
  - `openlibrary` - using a loop to iterate over JSON data, with the [Open Library Subjects API](https://openlibrary.org/dev/docs/api/subjects)
  - `datamuse` - using multiple API queries with the [DataMuse API](https://www.datamuse.com/api/)
  - `pexels` - using an API key (for the starter code, I’ve included an API key, but if you decide to use this API later, get your own key!), with the [Pexels API](https://www.pexels.com/api/)

- 2: [Exercise](AJAX_exercise.md)

#### Quick Aside
Most of the examples of text input to an API query are using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) -
we can get text values from some HTML input with `let input = $(“#my-input”).val()` and then pass that to a template literal api request, e.g `https://pokeapi.co/api/v2/pokemon/${input}`. This’ll save a lot of time and hassle using ‘+’ to combine strings with variables, so keep it in mind!

### Part 3: Introducing The Midterm

### Inspiration

- [Covid-19 Tracker](https://viruscovid.tech/) - using open disease API, more related projects [here](https://github.com/disease-sh/awesome-novelcovid)
- [Pokedex.org](https://pokedex.org/) -  uses the PokeAPI
- [RhymeZone](https://rhymezone.com/) - uses the [DataMuse API](https://www.datamuse.com/api/) to find rhymes, synonyms, adjectives, and more
- [BigSexy Poems](https://bennadel.github.io/big-sexy-poems-poc/) - also uses the DataMuse API to help you write poetry
- [Prison Map](http://prisonmap.com/) - by [Josh Begley](https://joshbegley.com/), an artist who works with APIs and data



