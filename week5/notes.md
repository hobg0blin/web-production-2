### Some More JavaScript Tricks

#### Adding to HTML


##### innerHTML

If we get an object (using our `O()` function from last week), we can pretty easily change its HTML.

We can either set it to something new, with `=`:

**HTML**:
```
<div id=”my-element”></div>
```
**JS**:
```
let changeHTML = O(‘my-element’)
changeHTML.innerHTML = ‘<p>I’m changing the HTML</p>’
```

Which should give us: 

`<div id=”my-element”><p>I’m changing the HTML</p></div>`

Or we can add to it with `+=`:
```
changeHTML.innerHTML += ‘<p>I’m doing it again</p>
```

Which should give us: 

`<div id=”my-element”><p>I’m changing the HTML</p><p>I’m doing it again!</p></div>`

##### document.createElement

Sometimes, especially if we’re adding a lot of elements, it’s helpful to use `document.createElement()` instead. This creates an element, but doesn’t put in the HTML yet. To add it to the HTML, we have to “append” it. So to create a new div, and set its inner text, we’d have to do this:

**HTML**
```
<div id=”my-element”></div>
```
**JS**:
```
let changeHTML = O(‘my-element’)
let newDiv = document.createElement(‘div’) 
newDiv.textContent = “I’m a new div”
changeHTML.appendChild(newDiv)
```
**Output**:
```
<div id=”my-element>
  <div>I’m a new div</div>
</div>
```
###### querySelectorAll

`document.querySelectorAll(selector)` gets us an array of all the elements that match the query. This can be super useful for changing large sections of HTML:
**HTML**:
```
  <ul>
    <li class=”boring”></li>
    <li> class=”boring></li>
    <li class=”boring”></li>
```
**JS**:
```
let makeExciting = document.querySelectorAll(‘.boring’)
// here’s a quick preview of a for loop
for (let i = 0; i < makeExciting.length; i++) {
  // use the S function to make its background color exciting
  S(makeExciting[i]).backgroundColor = ‘pink’
}
```


#### Arrays

Arrays are list-like objects that let us store multiple values, so if I wanted a list of colors:

`let myArray = [‘green’, ‘red’, ‘yellow’, ‘blue’]`

You can access array items by their **index**, which always starts at 0, so:

```
console.log(myArray[0])
“green”
```

You can get an array’s length using the `array.length` function, but it’s important to remember that the length will always be 1 greater than its last index, since array indexing starts at 0:

```
//the array length is 4
console.log(myArray.length)
4
//but to get the last item we have to get it at index 3
console.log(myArray[3])
blue
//or we can use array.length-1
console.log(myArray[myArray.length-1])
blue
```

We can also create an array from a string using the `split()` method:

```
let cityString = “New York, “LA”, “Boston”
let cityArray = cityString.split()
console.log(cityArray)
[“New York”, “LA”, “Boston”]
```

Or a string from an array using the join method:
```
let newCityString = cityArray.join()
console.log(newCityString)
“New York, LA, Boston”
```

Finally, we can add to an array using `push()`

```
let hatArray = [“baseball”, “bowler”]
hatArray.push(“derby”)
console.log(hatArray)
[“baseball”, “bowler”, “derby”]
```
[More Array Methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

#### Loops

Loops are our primary method of interacting with arrays or repeating code a certain number of times. A simple for loop is initiated with a counter and a limit and loops that many times:

```
// we set a counter to 0, set a limit (less than 5), and increment the counter by 1 until the for loop ends
for (let i=0; i< 5; i++) {
  console.log(‘i: ‘ i)
}
1
2
3
4
```

But if we’re interacting with an array, we can just use its length as our limit, and access it using the number in our counter as the index:

```
let foodArray = [‘pizza’, ‘chicken’, ‘broccoli’, ‘plantain’]
// initialize our variable at 0, and since array length is always 1 greater than  its last index, we can set our limit at “less than” the array length
for (let i = 0; i < foodArray.length; i++) {
  console.log(foodArray[i])
}
pizza
chicken
broccoli
plantain
```

But there is also a `for...of` loop, which can be useful - this just automatically loops through every item in an array rather than using a counter and indexing. This is probably the easiest way to do it, but there are cases where you’ll need array index and a counter (for example, if you were accessing another array within the for loop).

```
let dogArray = [‘spaniel’, ‘pit bull’, ‘sheepdog’]
for (let dog of dogArray) {
  console.log(dog)
}
spaniel
pit bull
sheepdog
```

#### Objects

An object is a collection of data or functionalities - basically, it’s a set of key/value pairs that can store almost anything in JavaScript, including arrays, other objects, and functions. Objects are the core of JavaScript - understanding and using objects well will put you in a position to become a great JavaScript programmer.

Let’s start with a simple example:

```
  let person = {name: ‘Brent’, profession: ‘professor’}
```

You can access object values by their keys (in this case name and profession):

```
//you can use a bracket notation
console.log(person[‘name’])
Brent
//but it’s faster to use a dot notation
console.log(person.profession)
```

You can also iterate over an object using a for loop and `Object.keys`:

```
for (let key of Object.keys(person)) {
  console.log(‘The ‘ + key + ‘ of the person is  ‘ + person[key])
  // we have to use the bracket notation here, because the key comes out as a string
}
The name of the person is Brent
The profession of the person is professor
```

##### Arrays of Objects

A lot of the time, if your data is coming from a server, it’ll come in as an array of objects, so it’s good to get used to iterating over them.
```
let people = [{name: ‘Brent’, profession: ‘professor}, {name: ‘Dave’, profession: ‘professional chiller}]
```
You can access an object property within a for loop with a counter like so: 

```
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}
Brent
Dave
```

But again, it’s a lot easier to use a `for...of` loop:

```
for (let person of people) {
  console.log(person.profession)
}
professor
professional chiller
```

