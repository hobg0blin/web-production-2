function getFortune() {
  let numElement = O('pickNumber') // get the element
  let num = Number(numElement.value) //get its value and
  //convert it to a number
  let nameElement = O('userName')
  let name = nameElement.value
  let fortuneString = 'You will'
  let fortune = O('fortune')

