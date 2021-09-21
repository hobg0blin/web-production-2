//Global variables
const media = document.querySelector('video') // this just gets the video element
let playbackSpeed = 1 // Global variable to hold the playbackSpeed

function getModifier() {
  let valueElement = O("valueText")
  // get value of input element
  let valueText = valueElement.value
  // casting to a number - even though we set our input element to be a number, it still comes out as a string in JavaScript
  let value = Number(valueText)
  return value
}

    /* This function reads the value from the valueText element
       and adds it to the global playback speed value */
function addToModifier() {
  let value = getModifier()
  // Set the playback speed
  media.playbackRate = playbackSpeed
  // Display the updated playback speed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}
function subtractModifier() {
  let value = getModifier()
  // Set the playback speed
  media.playbackRate = playbackSpeed
  // Display the updated playback Speed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}

function multiplyModifier() {
  let value = getModifier()
  // Set the playback speed
  media.playbackRate = playbackSpeed

  // Display the updated playback speed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}

function divideModifier() {
  let value = getModifier()
  // Set the playback speed
  media.playbackRate = playbackSpeed

  // Display the updated playback seed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}



  /* This function clears the modifier value and updates the display
  */
function zeroModifier() {
  playbackSpeed = 1; // set the global modifier to 0
  // Set the playback speed
  media.playbackRate = playbackSpeed

  // update the display
  let resultElement = O("playbackSpeed")
  resultElement.innerText = "Playback speed is 1"
}

const play = O('play')

function playPauseMedia() {
  if(media.paused) {
    media.play();
  } else {
    media.pause();
  }
}

