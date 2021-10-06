## AJAX exercise

- Using the [sample API request](https://drive.google.com/file/d/1U-SWOjupG3vuycC2OOKLKnjlW32-Ff04/view?usp=sharing), play around with some of the sample API requests below and see what you get in the console (you’ll have to click the button even if you’re not using the input).

- Try adding something from your AJAX data to the HTML with jQuery - for starters, you could append something from the data using `$(“#output).append(“<div>” + data.key + “</div>”)`, or set its text using `$(“#output”).text(data.key)`

- Try adding an input or inputs to an API that has query parameters - take the value from textInput and pass it to the query parameter using template strings, e.g. `?q=${textInput}`

## Sample API Requests

#### [TV Maze](https://www.tvmaze.com/api) - API with tons of TV information. 
There are a number of endpoints you can try, but for now we’ll do an API Request to the search endpoint (this takes a query `q` - you could try adding your text input to this request)

`https://api.tvmaze.com/search/shows?q=csi`

#### [Open Disease](https://disease.sh/) - API with endpoints for historical and up-to-date COVID data
Again, there are a number of endpoints, but let’s try the request URL for the USA, today:

`https://disease.sh/v3/covid-19/countries/usa`

#### [Ball Don’t Lie](https://www.balldontlie.io/#introduction) - NBA player and team information, statistics, and more.

API request: we can just get the first 25 players in their database with

`https://www.balldontlie.io/api/v1/players`

Or add query parameters to get more players or search for a specific name (this could be a good use of text input).

`https://www.balldontlie.io/api/v1/players?search=davis&per_page=100`

#### [The Meal DB](https://www.themealdb.com/api.php) - allows you to search meals by name, ingredients, or more. 
Simple API request to get the recipe for Arrabiata:

`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`

Or search by ingredient (in this case chicken breast): 

`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`

#### [myAnimeList API](https://jikan.docs.apiary.io/#introduction/) 
A lot like the TV Maze API, but just for Anime and Manga! We’ll specifically use their [search endpoint], which has a number of potential query inputs that could be used with multiple inputs in the HTML - there are even ways to filter out NSFW content (if you use this for your midterm, please keep the classroom a hentai-free zone).
This is just searching for Gundam, but you could use the input to search for something else.

`https://api.jikan.moe/v3/search/anime?q=Gundam`


#### [Deck of Cards API](https://deckofcardsapi.com/)- Create a deck of cards, draw from it

You could use this to make your own blackjack game, or tarot reader, or whatever else you want to do -

Just to create a deck of cards, the API Request is:

`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

If you get the deck id from the initial request (try storing it as a variable, or just writing it down for now), you can draw cards:
`https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2`
