# Class 5: JavaScript Review 3.0

- [Notes for today](notes.md)

## Setup

Download and open the [starter code](https://drive.google.com/file/d/1WcsCXX1DsHpPO5XiFghSh5Jc46QRgE0f/view?usp=sharing) in the browser and Atom. Don’t forget to open the console!

## Part 1: Arrays And Loops
- Tutorial - open the arrays and loops folder and follow along in index.html and script.js

### Exercise (Pick One)
#### Text
In the `exercise` folder, either create a simple array of things you’re interested in and try accessing items by index, displaying them on the page in a for loop in the `addArray() function`, reversing them, changing their styles - anything else you’d like to try. You can try adding them using the createLi function included or roll your own. Once you’ve added them in a for loop, try using the `addItems()` function to add new ones

#### Images:
In the `exercise_img` folder, create an array of image sources - you can get links in google image search by left clicking an image and hitting “copy image link”. 
- Try adding them to the page in a for loop in the `addImages()` function - I’ve included
- Try adding new image sources using the input button

## Part 2 - Objects
- Tutorial: follow along in script.js and index.html in the “objects” folder
- Exercise/assignment: pick one of the options from the assignment below and start on it - due Wednesday, October 6 at 8pm.

## Reference

- [All HTML Color Names](https://www.w3schools.com/colors/colors_groups.asp)
- [Array methods cheat sheet](https://dev.to/vincenius/javascript-array-functions-cheatsheet-1c15)
- [Object methods cheat sheet](https://dev.to/vincenius/javascript-object-functions-cheat-sheet-48nn)
- [For...in vs. For.. of](https://bitsofco.de/for-in-vs-for-of/)
- [JavaScript Arrow Notation](https://www.w3schools.com/js/js_arrow_function.asp)
- [Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

## Reading
- [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

## Assignment - [Starter Code](https://drive.google.com/file/d/1Ogj5CTEg5Ha4EEQuG7NaijXLV35h9dck/view?usp=sharing)

### Option 1: Object Story (assignment_story in the [starter code](https://drive.google.com/file/d/1Ogj5CTEg5Ha4EEQuG7NaijXLV35h9dck/view?usp=sharing))
- Using the starter code, create your own array of at least 5 objects each that writes a short story
- (Or whatever you’d like - you could write a series of recipes, or a poem, or a list of complaints, or mad libs)
- Each object should have least **four** key/value pairs, like - `[{noun: ‘dog’, adjective: ‘brown’, verb: ‘ran’, adverb: ‘quickly’}]`
- Use unique keys and values, not just the example ones
- Use a for loop over the array in the `showElements()` function to add your keys and values to the container
- You can use the `createDiv()` function to add them or come up with your own way
- In the HTML, add an input for your extra keys so you can add to your array
- Update the addItems() function to use your keys
- If you use it, modify the structure of the sentence in `createDiv()`
- Feel free to add your own CSS styles
- Bonus points if you use document.querySelector on the added elements to change the HTML (add an onclick handler, change a style)
- Bonus points if you use an array as a key value and iterate over that
- Bonus points if you use the getRandomItem() function to make it randomized, or use random keys

### Option 2: Image Collage (assignment_img in the [starter code](https://drive.google.com/file/d/1Ogj5CTEg5Ha4EEQuG7NaijXLV35h9dck/view?usp=sharing))
- Using the starter code, create your own array of at least 5 objects with image sources and attributes
- In the `addImage()` function, add a for loop that adds them to the page using the `createDiv()` function
- They’re already absolutely positioned, so set position attributes for them in the object keys and apply them in the `createDiv()` function - like the “top” and “left” in the starter code
- Make an image collage using the positioning in each object
- Add at least one key/value pair to each object that styles either the <div> or the <img> in the `createDiv()` function (like the width and height or top and left in the starter code)
- You can also add captions or other elements from your object - go wild!
- Feel free to add your own CSS styles as well
<img src=”img/collage.png” width=”800px” />
- One possible outcome from your collage

## Either Option

- In your web production 2 folder, create a folder called `week5`
- Put your finished code in the `week5` folder and commit and push to GitHub
- Check and make sure it uploaded to your GitHub page - it should be at {your github username}.github.io/week5/
- Submit the link [here](https://docs.google.com/forms/d/e/1FAIpQLScJ_hzjToD08UX5Py2QP4t8VhiKaIAHZNn6dQVUQbSerfHgrA/viewform?usp=sf_link)

