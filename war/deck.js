import Card from "./card.js"

export default class Deck {
  cards = []
  suits = ['clubs', 'diamonds', 'hearts', 'spades']
  ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
  constructor() {
    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        this.cards.push(new Card(suit, rank))
      }
    }
  }
  checkCards() {
    for (const card of this.cards) {
      console.log(card)
    }
    return this.cards.length
  }
  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      const randomIndex = Math.floor(Math.random() * 52)
      const tempCard = this.cards[i]
      this.cards[i] = this.cards[randomIndex]
      this.cards[randomIndex] = tempCard
    }
  }

  dealCard() {
    return this.cards.pop()
  }
}

// const deck = new Deck()
// deck.checkCards()
// deck.shuffleCards()
// deck.checkCards()
// deck.dealCard()
// deck.checkCards()
