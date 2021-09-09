### Class 3 - Drawing With Code
### In-class CSS
- [Live Code](css-animations/)
- [As a Zip File](https://drive.google.com/file/d/18xporQnBTKJ5iN_b6DotibQyZn5NSVEe/view?usp=sharing)
#### In-class P5
- [Self-portrait](https://editor.p5js.org/brondle/sketches/-M3YoLhbV)
- [Animation](https://editor.p5js.org/brondle/sketches/Qrhj4f2po)
- [Abstract Art](https://editor.p5js.org/brondle/sketches/XUScJq083)

## A Quick Reminder: Debugging JavaScript Code

If you’re having issues with your JavaScript code, the easiest way to debug is by checking your browser console:

![how to open the browser console](img/debugging_javascript.png)

You can also use `console.log()` to display a JavaScript variable in the console that’s giving you trouble:

```
let myProblemVariable = ‘I’m a problem’;
console.log(myProblemVariable);
```


## Setup


For today’s session you’ll probably want to create an account in the [p5.js editor](https://editor.p5js.org/)

Download the [in-class starter code](https://drive.google.com/file/d/1TN10wGo4SvKRXoPRQgpGS5v_cjTP5fZH/view?usp=sharing)




### CSS Transitions & Animation

There are more complicated ways of drawing with code using JavaScript, but we can do plenty with good old-fashioned CSS.

We can [transform](https://css-tricks.com/almanac/properties/t/transform/) an object directly, so if we wanted to make an element 2 times bigger, we could do something like this:

```
.element {
  transform: scale(2)
}
```

But we can also animate our transforms (or any other changes we make to CSS) using [transitions](https://css-tricks.com/almanac/properties/t/transition/), which tell CSS that we want it to be animated a certain way. To make a transition happen in pure CSS, we need to declare it with a [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
So we tell the parent class we want a transition to happen, and then use a pseudo-class (in this case `:hover`, which fires when we hover over the element):

```
.element {
              /* tell it what’s transitioning, the speed to make the transition, and the [“timing function”](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
  transition: transform .5s linear; 
}
.element:hover {
  transform: scale(2)
}
```

If we want to do more than just change something on hover, we can combine transitions with JavaScript! By adding a class to an element with JavaScript, and giving its parent a transition attribute, we can animate the change:



CSS:
```
#my-element {
  transition: all 1000ms ease-out;
  width: 50px;
  }
.widen {
  width: 150px;
}
```

JS:
```
let element = document.getElementById(‘my-element’)
element.onclick = function(element) {
  element.classList.add(‘widen’)
}
```



### The Canvas

The canvas is a curious case in HTML5. It’s technically an HTML tag, and can have its width/height/other attributes modified a bit with CSS, but to actually draw on a canvas you have to use JavaScript.

We won’t touch the canvas directly much, since p5 is an easier way of working with it, but some basics are here:

[Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

### p5.js

[p5](https://p5js.org/) is a library that lets us interact with the canvas in more intuitive and simple ways.

The starter code for a local p5 sketch is in this week’s starter files, but you can also create an account with the [p5 editor](https://editor.p5js.org/) if you want to play with your code without having to constantly reload the page.

[p5 Reference](https://p5js.org/reference/)

### Reference
- [p5 Cheatsheet](https://bmoren.github.io/p5js-cheat-sheet/)
- [p5 Examples](https://p5js.org/examples/)
- [p5 Reference](https://p5js.org/reference/)


### Inspiration
- [Experiments with p5](https://purin.co/Experiments-with-P5-js)
- [77 CSS Animation Examples](https://freefrontend.com/css-animation-examples/)
- [Creative Coding with p5](https://www.codecademy.com/resources/blog/creative-coding-p5js-examples/)
- [p5 Showcase](https://showcase.p5js.org/#/2020-All)


### Reading

- [Advanced HTML & CSS: Transforms](https://learn.shayhowe.com/advanced-html-css/css-transforms/)
- [Advanced HTML & CSS: Transitions & Animation](https://learn.shayhowe.com/advanced-html-css/transitions-animations/)
- [Get Started With p5](https://p5js.org/get-started/)
- [Introduction to p5](https://medium.com/comsystoreply/introduction-to-p5-js-9a7da09f20aa)

### Assignment 3

- [Starter Code](https://drive.google.com/file/d/1wXe27STsQUWOGwpawArC-CCaelwgfgEl/view?usp=sharing)
- Make your own iteration on one of the p5 sketches from class: self-portrait, abstract art. You’re welcome to use the assignment starter code or the code from class as a jumping off point, but you should add at least 3 new shapes or lines and show evidence of exploring with [color](https://www.w3schools.com/colors/colors_names.asp), position, etc.
- Or roll your own drawing! If you’re a more experienced JavaScript programmer, consider adding animation or movement.
- If you decided to work in the p5 editor, don’t forget to hit `File > Download`, and add a `<link rel=”stylesheet” href=”styles.css”`> to your “index.html” for the next step.
- In the `index.html` file for your p5 sketch, add an HTML element with at least one CSS animation or transition from class (other than the one in the starter code).
- Or feel free to use a JavaScript transition instead.
- In your web production 2 folder, create a folder called `week3`
- Put your finished code in the `week3` folder and commit and push to GitHub
- Check and make sure it uploaded to your GitHub page - it should be at {your github username}.github.io/week3/
- Submit the link [here](https://docs.google.com/forms/d/e/1FAIpQLScJ_hzjToD08UX5Py2QP4t8VhiKaIAHZNn6dQVUQbSerfHgrA/viewform?usp=sf_link)

