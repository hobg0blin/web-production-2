### Using JSON locally
Downloading a JSON file from an API:

In the terminal: `curl {api url} > {filename}.json`

What you get should look something like this (using the balldontlie API as an example):
```
{"data":[{"id":14,"first_name":"Ike","height_feet":null,"height_inches":null,"last_name":"Anigbogu","position":"C","team":...
```

The easiest way to load this in your own script is to turn it into a variable in the json file and add quotation marks around it `’` - so once it’s downloaded (this is using the balldontlie example), just add something like to your JSON file:

```
data = ‘{"data":[{"id":14,"first_name":"Ike","height_feet":null,"height_inches":null,"last_name":"Anigbogu","position":"C","team":... (JSON continues) }’
```

You’ll have to include the JSON file in your `index.html`
`<script type=”text/javascript” src=”data.json”`

And then you can access it by using `JSON.parse`:
```
let myData = JSON.parse(data)
let players = myData.data
```

