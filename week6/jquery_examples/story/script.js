let mySentences = [{'noun': 'dog', 'adjective': 'brown', 'verb': 'ran', 'adverb': ['quickly', 'rapidly', 'with fear in his eyes']}, {'noun': 'cat', 'adjective': 'speckled', 'verb': 'chased', 'adverb': ['angrily', 'playfully', 'with murder in his eyes']}, {'noun': 'turtle', 'adjective': 'sleepy', 'verb': 'followed', 'adverb': ['slowly', 'lazily', 'curiously']}, {'noun': 'jaguar', 'adjective': 'patient', 'verb': 'waited for', 'adverb': ['silently', 'hungrily', 'knowing his meal would be there soon']}]


function showElements(array) {
  $("#object-container").html('')
   let elements = createDivs(array)
    let fadeInTimer = 500;
    for (let element of elements) {
      $("#object-container").append(element)
      element.fadeIn(fadeInTimer)
      fadeInTimer += 1000
    }
  // once we've put all these items on the page, we can add a click handler to them
  addClick()
}

showElements(mySentences)



function addSentence() {
  // add inputs for your own keys
  let nounInput = $('#key-1')
  let adjectiveInput = $('#key-2')
  let verbInput = $('#key-3')
  let adverbInput = $("#key-4")

  // change these to your own keys
  let noun = nounInput.val()
  let adjective = adjectiveInput.val()
  let verb = verbInput.val()
  let adverb = adverbInput.val()
  // create a new object - again, change this to your own keys
  console.log('adverb split', adverb.split())
  let item = {noun: noun, adjective: adjective, verb: verb, adverb: adverb.split(',')}
  mySentences.push(item)
  console.log('my sentences: ', mySentences)
  //if we don't call showElements again, it won't display the new one
  showElements(mySentences)
  //zero out the inputs
  nounInput.val('')
  adjectiveInput.val('')
  verbInput.val('')
  adverbInput.val('')
}

function createDivs(array) {
  //you could add more properties to the textContent, or set its innerHTML to properties
    let nouns = []
    let divArray = []
    for (let item of array) {
      let div = $("<div></div>", {
        text: createSentence(item, nouns),
      })
      div.css({'display': 'none'})
      div.addClass('my-div')
      nouns.push(item.noun)
      divArray.push(div)
    }
    return divArray;
  }

function createSentence(object, array) {
  let nouns = ''
  for (let i = 0; i < array.length; i++) {
    if (i > 0 && i < array.length - 1) {
      nouns += `, the ${array[i]}`
    } else if (i > 0 && i == array.length - 1) {
      nouns += `, and the ${array[i]}`
    } else {
      nouns += ` the ${array[i]}`
    }
  }
  let sentence = `The ${object.adjective} ${object.noun} ${object.verb} ${nouns} ${getRandomItem(object.adverb)}.`
  return sentence
}

// we have to add this click handler after we've added all the images to the page, otherwise jQuery won't detect them

function addClick() {
$('.my-div').click(function() {
  let classes = ['pink', 'underline', 'border']
  $(this).addClass(getRandomItem(classes))
})
}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}
