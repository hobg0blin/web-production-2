# A Quick Refresher On HTML5

## Setting Up A Simple Page

Let's make an HTML page to refamiliarize ourselves with the key points of HTML. In Atom, open the `index.html` file you created in the terminal.

First, we always need to include our "doctype" declaration: this tells the browser what kind of document it is.

Add `<!DOCTYPE html>` to the very first line of your file.

Now, add the `<html>` tags:

```
<html>
<!-- welcome to my super cool webpage --!>
</html>
```

So the browser knows we're working with HTML. Great! But this is still an empty page. Let's add our `<head>` element and a `<title>` to give it some basic information, inside the HTML tags:

```
<head>
<!-- Metadata goes here --!>
<title> My Cool Webpage </title>
</head>
```

Now let's add some content, after the `<head>`, using `<body>` tags. We can use `<h1>` - `<h6>` tags for "headers", which designate important content or changes in sections.

```
<body>
<h1> My Cool Webpage </h1>
</body>
```

Now our page has a title, but there's so much more we can do!

Inside the body tags, let's add a `<div>`, short for "division", a simple way of sectioning out our code, with a little paragraph `<p>` about our page:

```
<div>
<p> This is a super cool webpage I made. It doesn't have much content in it yet.</p>
</div>
```

Let's spruce up our page again with an `<img>`. Take an image from your computer or the web and put it in the `img` folder we created, then add an `<img>` tag above the `<div>`, with an `alt` attribute describing it, like so:

```
 <img src='./img/my_cool_image.jpeg' alt='A picture of a dog wearing sunglasses.>'
```
### A Note On Filepaths

Filepaths in HTML can be an absolute reference (to a website, starting with `http` or `https`), or relative (we can reference a file in our current folder by prefacing it with `./`, like the image `src` above).

That's getting better. Let's take a look at some other stuff we can add:

Links: we can add links using `<a>`, putting the text for the link inside the tags:

`<a href="https://zombo.com">My Favorite Website</a>`



Lists: `<ul>`, unordered, will just show a list with bullet points. `<ol>` will number the list. `<dl>`, which is a pretty uncommon form of list, is a "definition" list, where you can add a term `<dt>` and its definition `<dd>`

```
<div>
  <h2> An unordered list of programming languages </h2>
  <ul>
    <li> JavaScript </li>
    <li> Python </li>
    <li> Ruby </li>
    <li> PHP </li>
    <li> C </li>
    <li> Erlang </li>
    <li> There are too many programming languages, I give up </li>
  </ul>
</div>
<div>
  <h2> A list of my favorite drinks, in order </h2>
    <ol>
      <li> Seltzer </li>
      <li> Coffee </li>
      <li> Moxie </li>
    </ol>
</div>
<div>
  <h2> A definition list </h2>
    <dl>
      <dt> Programming </dt>
      <dd> The field of trying and failing to make a computer understand what you want </dd>
      <dt> Bugs </dt>
      <dd> A karmic punishment for the belief that you can make a computer understand what you want </dd>
    </dl>
</div>
```

Spans: a `<span>` is an [inline](https://www.freecodecamp.org/news/inline-elements-and-block-elements-in-html-explained/) container used to separate and style text with CSS. We'll touch more on these in the CSS refresher, but if you wanted to designate some text as being red, you could use a span with a "red-text" class:

`<span class="red-text">This text should be red.</span>`

Text styling:
`<em>` denotes "emphasized" text. Most browsers will italicize `<em>` elements by default.
`<strong>` denotes important text. Most browsers will bold `<strong>` elements by default.

`<p> In this paragraph, <em>this part is emphasized</em>, and <strong>this part is important</strong>`.

Videos: You can embed a video with the `<video>` tag. Adding the attribute `controls` will add play/pause controls to the video container. The text inside a video will only show if the browser doesn't support the video element.

`<video src='./video/test_video.mp4' controls> Video not supported. </video>`


## Reference

[HTML5 Cheat Sheet](https://websitesetup.org/html5-cheat-sheet/)


## Exercise

Add some of the above elements to the simple HTML page you've already made. Try a list of your pet peeves, or a video you find online.
