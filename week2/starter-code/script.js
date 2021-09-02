const myTitle = 'A Beautiful Poem'
let myObject = {'adjectives': ['verdant', 'powerful', 'afraid'], 'nouns': ['rock', 'mountain', 'tree', 'blade of grass']}
let myArticleArray = ['The', 'an', 'a']

function returnPoem(title, article, noun, adjective) {
  return title + ': ' + article + ' ' + adjective + ' ' + noun
}

W(returnPoem(myTitle, myArticleArray[0], myObject.adjectives[0],myObject.nouns[0]))

function forLoopPoem(title, articles, nouns, adjectives) {
  W(title)
  for (i = 0; i < 3; i++) {
    W(articles[i] + ' ' + nouns[i] + ' ' + adjectives[i])
  }
}

forLoopPoem(myTitle, myArticleArray, myObject.nouns, myObject.adjectives)


// while loop poem:
let counter = 0
while(counter < 5) {
  W(getRandomItem(myArticleArray) + ' ' + getRandomItem(myObject.adjectives) + ' ' + getRandomItem(myObject.nouns))
  counter++
}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}
