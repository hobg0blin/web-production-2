## jQuery Basics:  $

Congratulations, `document.getElementById()` and utility functions like `O()` and `S()` are done with!

jQuery is an extension of the JavaScript language designed to make things like changing the HTML/DOM and making API requests much easier.

You can pretty much always tell when someone is using jQuery because it uses the `$` sign.

To add jQuery to your project, all you need to do is add this line to the `<head>` of your HTML:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`

**Make sure you put this in the HTML before any script you want to use it in, since the HTML reads scripts in order**

### Getting Started

You always want to wrap your jQuery code in this, which tells it not to execute until the dom is ready - it listens for the JavaScript document ready event:

```
$(function() {
// Your code here!
})
```

(You can also use `$(document).ready(function() {})`, but this is shorter).

### Getting Elements, Changing CSS

Using jQuery, we can easily access elements and set their CSS and attributes - this would set the body background color to red:

```
$(“body”).css(“background”, “red”)
```

Or change every instance of a class:
```
$(“.change-me).css(‘border’, ‘1px solid red’)
```

Or even change multiple objects at once:

```
$(“blockquote”, “p”, “li”).css(‘text-decoration’, ‘underline’)
```

If we want to change multiple attributes, we can pass it a JavaScript object with the attributes we want to change:
```
  $("#change-box").css({
    "border": "1px solid blue",
    "background-color": "cyan",
    "border-radius": "15px"
  })
```

We can set text without dealing with `innerText`:
`$(“#change-text).text(“I’m changing the text!”)`
We can also change the HTML of an object easily:

```
$(“#change-html”).html(“<div>I’m new HTML!</div>”)
```

Or get its HTML:
```
console.log($(“#change-html).html())
<div>I’m new HTML!</div>
```


As a rule, for any jQuery built-in function, calling it with no arguments, like `$(“#change-html).html()` will give you the current state of that attribute, while passing it an argument will change it.

### Simple Event Handlers, This, Animations

jQuery also makes it easy to attach the click handlers we’ve been using:

```
$(“#click-me”).click(function() {
  $(“#result”).html(“<div>You clicked me!</div>)
}
```

And even has handlers for click and doubleclick:

```
  $(‘.box’).click(function() {
    $(this).slideUp()
  })
```

That $(this) in the click function is especially cool: if you attach a handler or a function to a jQuery object, it automatically passes that object to the internal function, which we can reference with `$(this)` - even if there are multiple instances of a `.box` class on the page, it’ll only affect that one.

The `slideUp()` there is one of jQuery’s [built-in animations](https://www.w3schools.com/jquery/jquery_animate.asp) - we’ll get more into these, plus some cool ways of handling mouse input, keyboard input and more, next week.


### Changing Attributes
We can change any HTML attributes using jQuery’s built-in `.attr` function, like an image source:

```
$(“#change-image”).attr({src: ‘img/cat_wearing_sunglasses.jpg’})
```

### Append, prepend, after, before

Say we have a block of HTML like this:

```
<div id=”adding stuff”>
  <p> I am just a simple paragraph </p>
</div>
```

We can use jQuery’s `prepend` function to add to the beginning of it:

`$(“#adding-stuff).prepend(‘<p>I am a more complex paragraph</p>')`

Which gives us this - adding to the **beginning** of the selected element:

```
<div id=”adding stuff”>
  <p>I am a more complex paragraph</p>
  <p> I am just a simple paragraph </p>
</div>
```

Or we can use `append` to add to the end:

`$(“#adding-stuff).append(‘<p>I’m at the end</p>’)`

```
<div id=”adding stuff”>
  <p>I am a more complex paragraph</p>
  <p> I am just a simple paragraph </p>
  <p>I’m at the end</p>
</div>
```

We can also use the `before` and `after` functions to add elements **before and after** that element:
```
$(“#adding-stuff”).before(“<h4>My List of Paragraphs</h4>)
$(“#adding-stuff).after(“<h5>It’s pretty short</h5>)
```

```
<h4>My List of Paragraphs</h4>
<div id=”adding stuff”>
  <p>I am a more complex paragraph</p>
  <p> I am just a simple paragraph </p>
  <p>I’m at the end</p>
</div>
<h5>It’s pretty short</h5>
```

### Creating and Appending Elements

If we need to create an element, jQuery makes that a lot easier than `document.createElement()` - we can pass it its HTML attributes as a JavaScript Object (note that, since it’s an image and they don’t have closing tags, we pass it `<img />` - if we wanted to create a different element, like a `<p>`, we’d have to pass it `<p></p>`, then its attributes as the second argument):

```
  let img = $(“<img />,
  {
    src: ‘img/landscape.jpg’,
    id: ‘landscape-image’
  })
```

So if we have some HTML we want to add it to:

```
<div id=”image-container”>
</div>
```

We can just use the `appendTo` function to add it:
```
  let img = $(“<img />,
  {
    src: ‘img/landscape.jpg’,
    id: ‘landscape-image’
  })

  img.appendTo(“#image-container”)
```

Which gives us this:

```
<div id=”image-container”>
  <img src=”landscape.jpg” id=”landscape-image”>
</div>
```

And finally, we can add a class we’ve declared in our CSS to it, since we gave it the id `landscape-image` earlier:

```
$(“#landscape-image).addClass(‘grayscale’)
```

Which gives us this:

```
<div id=”image-container”>
  <img class=”grayscale” src=”landscape.jpg” id=”landscape-image”>
</div>
```


