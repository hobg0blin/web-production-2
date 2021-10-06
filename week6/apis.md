## Places To Look For APIs

Generally, I’d advise against using an API that requires a key: people love to steal them from GitHub and get you locked out of your account, and it adds an extra layer of hassle. That said, if you’re dead set on using one with a key, go ahead! Just make sure you don’t post it to GitHub and send it to me separately, or to [download the JSON as a file](local_json.md) and use it that way.

If the API requires OAuth (unless you know how to set up your own server, in which case, congrats, you’ve basically completed this class!) you won’t be able to use it.

In general, if you’ve got something you’d like to find an API for, chances are if you google {topic} API, one exists out there.

- [Big List Of Public APIs](https://github.com/public-apis/public-apis)
- [APIList.fun](https://apilist.fun/)
- [Free Public APIs](https://rapidapi.com/collection/list-of-free-apis)

## Some Suggestions

Sample requests for most of these can be found in either the tutorial code or the [in-class exercise](AJAX_exercise.md)

#### [PokeAPI](https://pokeapi.co/docs/v2)
- This API has endpoints for things like berries, encounters, games, items, locations, machines, and more, but of course the most important endpoint is to [pokemon](https://pokeapi.co/docs/v2#pokemon).
- So if I make an API request to `https://pokeapi.co/api/v2/pokemon/butterfree/`, I would get JSON like:
```
{id:12,
name:"butterfree",
base_experience:178,
height:11,
is_default:true,
order:16, weight:320,
abilities: [],
forms: []
... (and more...)
```
- Some thoughts:
  - This is an interesting API because it has so many endpoints - if someone searches a pokemon, you could get their basic data from the `/pokemon` endpoint, but you could also get lots more from the `characteristics`, `ability`, and other endpoints - so you could make multiple API requests based on your search to populate the page with more information!


#### [DataMuse](https://www.datamuse.com/api/)

An API that can find words that sound like other words, words that rhyme with other words, so on and so forth. You could use this to make a site that generates a poem, or a story, or that helps people write a poem like [BigSexy Poems](https://bennadel.github.io/big-sexy-poems-poc/).

#### [Open Library](https://openlibrary.org/developers/api)

This is an API with a number of endpoints, but you could use it to make a book search engine using the [Search API](https://openlibrary.org/dev/docs/api/search), or a book recommender using the [Subject API](https://openlibrary.org/dev/docs/api/subjects), or even search for matching text using the [Search Inside API](https://openlibrary.org/dev/docs/api/search_inside)

- Some thoughts:
  - This is another one, like the Pokedex API, with a number of endpoints that correspond to one another. So you could try searching for a book, then use that book’s cover ID to request its cover ID from the [Cover API](https://openlibrary.org/dev/docs/api/covers) and then display that to the page.


#### [TV Maze](https://www.tvmaze.com/api)

Another API with a number of endpoints that would allow you to search a show, then use the data from that search to get its cast, crew, seasons, episodes, etc.
- You could use this to make an app that searches TV shows and displays details about them.


#### [Open Disease API](https://disease.sh/)

An API tracking COVID data. This is less fun than some of the others, but you could use this for a lot of important purposes. You could build your own [Covid-19 Tracker](https://viruscovid.tech/), or look for inspiration from other projects using this API [here](https://github.com/disease-sh/awesome-novelcovid)

#### [balldontlie.io](https://www.balldontlie.io)

- This API can get request all NBA players, teams, and stats, or get individual ones but **only by their ID**.
- If you were to make an api request to ` "https://www.balldontlie.io/api/v1/players"` it returns JSON formatted like this:
```
  {
  "data":[
    {
      "id":237,
      "first_name":"LeBron",
      "last_name":"James",
      "position":"F",
      "height_feet": 6,
      "height_inches": 8,
      "weight_pounds": 250,
      "team":{
        "id":14,
        "abbreviation":"LAL",
        "city":"Los Angeles",
        "conference":"West",
        "division":"Pacific",
        "full_name":"Los Angeles Lakers",
        "name":"Lakers"
      }
    }
    ... (but it lists all the players)
 ]
 }
```
- Some thoughts:
  - This is a good example of using query parameters - if you added `/?search=james` to your API request, it would return all players with james in their name, so you could make a searchable database of players and stats. But, it by default only returns 25, so you’d also have to use the query parameter `?per_page=50` (up to 100) if you wanted to get more players at a time.

#### [The Meal DB](https://www.themealdb.com/api.php)

This is an API that allows you to search meals by category, name, main ingredient, and more. See the results for [chicken breast](https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt) or [Arrabiata](https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata)

You could use this to make a what’s for dinner app, or your own little New York Times Cooking App.

#### [The Cocktail DB](https://www.thecocktaildb.com/api.php)

Made by the same folks as the meal DB, this lets you search cocktails by name, ingredient and more. See the results for [margarita](www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita) or [vodka](www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka). 

Again, you could create an app that recommends cocktails based on what’s in your liquor cabinet, or gives recipes for specific cocktails.

#### [Lorem Picsum](https://picsum.photos/)

A random image API. Not very complicated on its own, but if you wanted to create a random collage, or some digital art, you could use this.

#### [MyAnimeList API](https://jikan.docs.apiary.io/#introduction/)

You could use this to search for anime recommendations, or display information about your favorite anime. No hentai, please.

#### [Deck of Cards API](https://deckofcardsapi.com/)

This is an API you could use to create a deck of cards and draw from it - you could use it to create a simple blackjack game, or a tarot reading, or whatever else you want to use cards for.

#### [Dog API](https://dog.ceo/dog-api/documentation/)

Get images of dogs by breed, sub-breed, random dog images - the world of dogs is in your hands.

#### [Art Institute of Chicago API](https://api.artic.edu/docs/#quick-start)

Search all the art in the Art Institute of Chicago. Make an art library, recommender, or a bizarre collage.

Unfortunately, if you want to show images from this API, you have to go through a secondary process using the data from your request, documented [here](https://api.artic.edu/docs/#iiif-image-api).


#### Some fun APIs that you have to sign up for and use keys (this is a bit more annoying, and if you post your API key on GitHub, chances are someone will steal it and get you locked out of your account)

- [The Movie Database](https://www.themoviedb.org/documentation/api) - movie information
- [NASA API](https://api.nasa.gov/index.html#main-content) - tons of NASA data
- [Mapbox](https://www.mapbox.com/) - custom maps!
- [Pexels](https://www.pexels.com/api/documentation/) - you could use this to create an image collage based on a search, or a random video collage
- [Giphy API](https://developers.giphy.com/)




