## Advanced Ajax Exercise

Pick one person in your group to write the code, while the other people in your group give advice. You can swap out after a few minutes if you want to.

Open `ajax/exercise`, (or, if you want to, use one of your own APIs that has multiple endpoints).

The goal is to make a second JSON request to an API using an id or some similar key, so you’ll need to make an initial JSON request, then make a second request **inside that request**.

If you’re using the exercise code:

The example uses the [TVMaze Shows API](https://www.tvmaze.com/api#shows).

The page is autopopulated with shows and a “get more information” button.

In the `getInfo()` function, try adding one of the endpoints from the shows API, like `https://api.tvmaze.com/shows/${showId}/cast`. Try out a few different endpoins from the API, then see if you can get them on the page -

For example, if I used cast, I should get JSON like this:
```
[{"person":{"id":1,"url":"https://www.tvmaze.com/people/1/mike-vogel","name":"Mike Vogel","country":{"name":"United States","code":"US","timezone":"America/New_York"},"birthday":"1979-07-17","deathday":null,"gender":"Male","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"},"updated":1547364913,"_links":{"self":{"href":"https://api.tvmaze.com/people/1"}}},"character":{"id":1,"url":"https://www.tvmaze.com/characters/1/under-the-dome-dale-barbie-barbara","name":"Dale \"Barbie\" Barbara","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/3.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/0/3.jpg"},"_links":{"self":{"href":"https://api.tvmaze.com/characters/1"}}},"self":false,"voice":false}],
```

So I could try adding the actor and their character to the page with:

```
for (let actor of data) {
  element.after(`<div>${actor.person.name} as ${actor.character.name}</div>`)
}
```
