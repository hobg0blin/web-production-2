## Events and Animations Exercise

#### Reference
- [jQuery Effects](https://www.w3schools.com/jquery/jquery_hide_show.asp)
- [Notes](advanced_jquery.md)

Pick one person in your group to write the code, while the other people in your group give advice. You can swap out after a few minutes if you want to.

In `jquery/exercise` (or in your own midterm project if you prefer), try out different animations on the simple Pokedex with the attached hover event in the `attachEvents()` function - we’re using this function because we’re using jQuery to add our HTML to the page, so if we just directly call it in the script our HTML may not be there yet and we wouldn’t be able to bind to the new HTML. Instead, we call this function in getPokemon() after the page is populated.

Right now, this just uses a hover event to show and hide the pokemon’s type.

With the sample hover code, try using different built-in jQuery animations instead of `.show()` and `.hide()`:

- `.fadeIn()`
- `.fadeOut()`
- `.slideUp()`
- `.slideDown()`

Try passing them different values (e.g. .`fadeIn(“fast”), .fadeOut(“slow”)`, or an integer for milliseconds.

Once you’re comfortable, try adding an animation to the hover or the built-in click function, e.g:

```
$(this).animate({
 borderWidth: ‘3px’
}, 500)
```

Try adding your own CSS or changing other subclasses using `$(this).find()`.


Finally, try adding a callback function to your animation that displays its abilites, which are still hidden, e.g.:

```
    $(this).animate({
      borderWidth: "5"
    }, 1000, function() {
      $(this).find('.abilities').fadeToggle('slow')
    })
```
