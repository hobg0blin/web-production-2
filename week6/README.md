## Housekeeping

[Feedback form](https://forms.gle/VUoAmSrS1YbuD3ts8) - optional and **anonymous** form for you to give feedback on the class so far, what’s working for you or isn’t, what you’d like to focus on going forward, etc.

## Today’s Class

### Part 1: A basic introduction to jQuery - [notes](jquery.md)
- Open the `jquery_basics` folder in the [starter code](https://drive.google.com/file/d/1lZ2iwINVhRHON7Yr1cdWqDIs261Vpg1o/view?usp=sharing) and follow along in Atom and the browser.

- Exercise: play with the [example code](https://drive.google.com/file/d/1rSvaNAPFmz5IOay5lTCQz_wVXcbn7N-A/view?usp=sharing) - jQuery implementations of last week’s assignment.


[jQuery inspiration](https://www.awwwards.com/websites/jquery/)

### Part 2: Intro to AJAX - [notes](AJAX.md)
- Follow along in each folder, keep an eye on the API documentation
- `kanye` - a simple AJAX request using [kanye.rest](https://kanye.rest/)
- `pokemon` - using $.getJSON and user input with the [PokeApi](https://pokeapi.co/docs/v2#pokemon)
- `openlibrary` - using a loop to iterate over JSON data, with the [Open Library Subjects API](https://openlibrary.org/dev/docs/api/subjects)
- `datamuse` - using multiple API queries with the [DataMuse API](https://www.datamuse.com/api/)
- `pexels` - using an API key (if you decide to use this API later, get your own key!), with the [Pexels API](https://www.pexels.com/api/)

- [Exercise](AJAX_exercise.md)

#### Quick Aside
Most of the examples of text input to an API query are using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) -
we can get text values from some HTML input with `let input = $(“#my-input).val()` and then pass that to a template literal api request, e.g `https://pokeapi.co/api/v2/pokemon/${input}`. This’ll save a lot of time and hassle using ‘+’ to combine strings with variables, so keep it in mind!

## Part 3: Introducing The Midterm

### Inspiration

- [Covid-19 Tracker](https://viruscovid.tech/) - using open disease API, more related projects [here](https://github.com/disease-sh/awesome-novelcovid)
- [Pokedex.org](https://pokedex.org/) -  uses the PokeAPI
- [RhymeZone](https://rhymezone.com/) - uses the [DataMuse API](https://www.datamuse.com/api/) to find rhymes, synonyms, adjectives, and more
- [BigSexy Poems](https://bennadel.github.io/big-sexy-poems-poc/) - also uses the DataMuse API to help you write poetry
- [Prison Map](http://prisonmap.com/) - by [Josh Begley](https://joshbegley.com/), an artist who works with APIs and data


## Reference
- [jQuery Cheatsheet](https://oscarotero.com/jquery/)
- [jQuery HTML/CSS Reference](https://www.w3schools.com/jquery/jquery_ref_html.asp)
- [jQuery AJAX reference](https://www.w3schools.com/jquery/jquery_ref_ajax.asp)
- [Some APIs to choose from](apis.md)
- [JSON vs. JSONP](https://stackoverflow.com/questions/2887209/what-are-the-differences-between-json-and-jsonp)
- [The Best jQuery Examples](https://www.freecodecamp.org/news/the-best-jquery-examples/)
- [Awesome jQuery](https://github.com/petk/awesome-jquery)

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
- [What’s an API? In English, Please](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)
- [Beginning jQuery - jQuery and AJAX](https://drive.google.com/file/d/10zPmSaGSsw_ODXEc2dqmCBdQ64FqQFvb/view?usp=sharing)



