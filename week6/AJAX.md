## Intro To AJAX

AJAX, which stands for Asynchronous JavaScript And XML, is a communication protocol that allows us to get and send data from a server without reloading the page or interrupting the user’s experience. For now, we’re just going to be focusing on getting data from servers and displaying it on the page.

### JSON

The X in AJAX may stand for XML, but mostly servers send things in JavaScript Object Notation, or JSON: this looks like a regular JavaScript object, except all the keys are wrapped in quotes:

```
{“data”: {
“people”: [
{“person”: “Jack”,
“age”: 20},
{“person”: “Jill”,
“age” : 57}
]
}}
```
### Anatomy of an AJAX request with jQuery

jQuery has a built-in `$.ajax()` method that lets us make requests to servers easily. Plus, it automatically parses it into a JavaScript object that we can then add to our pages!

Let’s look at the [Kanye Quotes API](https://kanye.rest/), which just returns a simple Kanye quote.

In this request, we:
- Tell it the URL of the API we’re requesting from
- Tell it the type of request, `get`, which means we’re requesting data from the server.
- Tell it the dataType, json, which is usually what we want.
- Add a `done` method to our request: servers usually take time to respond, which is why this is done **asynchronously**. jQuery knows to wait until the server responds, then that `done` function will fire
- Add a `fail` method to our request: sometimes a request won’t work, or a server will be down, in which case it’s usually good to have some sort of backup plan - if we’re displaying this data on the page, we could just put an error message on there with jQuery (which this does).
- Add an `always` method to our request, which will run whether it succeeds or fails - this is optional, but can be useful if you have something that should always happen after the request.

```
  $.ajax({
    'url': 'https://api.kanye.rest/',
    'type': 'get',
    'dataType': 'json'
  }).done(function(data) {

    //jQuery automatically parses the JSON for us
    console.log(‘data:’, data)
    $('#kanye-quote').text(data.quote)
  }).fail(function() {
    //sometimes your request will fail, you can deal with that here
    $("#kanye-quote").text('Whoops, try again')

  }).always(function() {
    console.log('if you want to do something whether it fails or not, do it here')
  })
})
```

If this goes well, the server will return something like:

```
 {“quote”: “If I got any cooler I would freeze to death”}
 ```

## $.getJSON()

jQuery also includes a simple method, which will generally meet our purposes: `$.getJSON`, which just assumes that we’re making a “GET” request and that we want JSON. Here we’ll try it with the pokeAPI:

```
let pokemonName = ‘butterfree’
$.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
          console.log('data: ', data)
      }).fail(function() {
        console.log("that pokemon doesn't exist")
})
```

Assuming all went according to plan, we’d get something like this:
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

### Queries

Some APIs can take queries, which are additions to your request that can get you more specific data. This example uses the [DataMuse API](https://www.datamuse.com/api/), which has lots of options for searching words. In this case, we add to our root API request: `https:api.datamuse.com`, using a `?` to indicate our queries, then add two queries, joined by the `&` symbol: `ml=${searchWord}&sp=${searchLetter}`. This will make our request search for words with meanings similar to “dog” that start with the letter “b”.

```
let searchWord = ‘dog’
let searchLetter = ‘searchLetter’
    $.getJSON(`https://api.datamuse.com/words?ml=${searchWord}&sp=${searchLetter}*`, function(data) {
      console.log('data: ', data)
  }).fail(function() {
    console.log("we can't find anything")
  })
}
```

### Keys

Some APIs require authorization keys to use, like the [Pexels API](https://www.pexels.com/api/). Usually, you’ll have to sign up for an account with them and they’ll give you a key. This requires us to go back to our `$.ajax` method so we can send their server our key - this is put in the `Authorization: ` header of our request:
```
let searchTerm = nature
      $.ajax({
        type: 'GET',
        url: `https://api.pexels.com/v1/search?query=${searchTerm}`,
        dataType: 'json',
        headers: {
          "Authorization": 'your key here'
        }
      }).done(function(data) {
        console.log('data: ', data)
       }
      }).fail(function() {
         console.log("we can't find anything")
      })
```

