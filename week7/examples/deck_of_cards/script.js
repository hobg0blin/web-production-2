//onload function
$(function() {
  $("#create-deck").click(function() {
    resetGame()
    getDeck()
  })
  // allow players to show and hide their cards
  let p1Hidden = true
  $(`#p1-show`).click(function() {
    if (p1Hidden == true) {
      $(`#p1-cards`).show()
      p1Hidden = false
    } else {
      p1Hidden = true
      $(`#p1-cards`).hide()
    }
  })
  let p2Hidden = true
  $(`#p2-show`).click(function() {
    if (p2Hidden == true) {
      $(`#p2-cards`).show()
      p2Hidden = false
    } else {
      p2Hidden = true
      $(`#p2-cards`).hide()
    }
  })
})

let cardsPlayer1 = []
let cardsPlayer2 = []

function getDeck() {
  $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`, function(data) {
    if (data.success == true) {
      let deckId = data.deck_id
      $(".game").css({display: 'flex'})
      setUpShuffle(deckId)
      setUpDraw(deckId)
    }
  })
}
// reset the game
function resetGame() {
  $("#game").hide('')
  $(".cards").html('')
  $("#shuffle-result").html('')
  cardsPlayer1 = []
  cardsPlayer2 = []
}

// shuffle the cards
function setUpShuffle(deckId) {
  $("#shuffle").click(function() {
  console.log('deck id: ', deckId)
  $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`, function(data) {
    console.log('data', data)
    if (data.success == true) {
      $("#shuffle-result").text('Shuffled!')
    } else {
      $("#shuffle-result").text("Couldn't shuffle")
    }
  })
})
}
//set up draw handlers for each player
function setUpDraw(deckId) {
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`, function(data) {
      console.log('data: ', data)
      // put first two cards in player array
      let hand1 = data.cards.slice(0, 2)
      let hand2 = data.cards.slice(2, 4)
      setUpHand(cardsPlayer1, hand1, 'p1')
      setUpHand(cardsPlayer2, hand2, 'p2')
    })
  $("#p1-draw").click(function() {
    //draw player one
    player1Draw(deckId)
  })
  $("#p2-draw").click(function() {
    player2Draw(deckId)
  })

}

function player1Draw(deckId) {
      $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`, function(data) {
      console.log('data: ', data)
      setUpHand(cardsPlayer1, data.cards, 'p1')
    })
}

function player2Draw(deckId) {
      $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`, function(data) {
      console.log('data: ', data)
      setUpHand(cardsPlayer2, data.cards, 'p2')
    })
}

// put drawn cards into player's hand
function setUpHand(playerArray, cards, playerId) {
  console.log('player array: ', playerArray)
    for (let card of cards) {
      playerArray.push(card)
    }
    $(`#${playerId}-cards`).html('')
    for (let card of playerArray) {
      console.log('card: ', card)
      $(`#${playerId}-cards`).append(`<img src=${card.image} />`)
    }
  }



//you could add scoring, or make sure a new deck is drawn when this one is out!
