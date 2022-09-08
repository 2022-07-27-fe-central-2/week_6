
class Player {
  hand = []
  score = 0
  constructor(name) {
    this.name = name
  }
  getPlayerName() {
    return `${this.name}`
  }
  checkHand() {
    for (const card of this.hand) {
      console.log(card)
    }
    return this.hand.length
  }
  getCard(card) {
    this.hand.push(card)
  }
  playCard() {
    return this.hand.pop()
  }
  increaseScore() {
    this.score += 1
  }
  getScore() {
    return this.score
  }
}
