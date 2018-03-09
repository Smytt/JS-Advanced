let solve = (() => {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    }

    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!faces.includes(value)) {
                throw Error('No such face!')
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.keys(Suits).map(x => Suits[x]).includes(value)) {
                throw Error('No such suit!')
            }
            this._suit = value;
        }
    }

    return {Card, Suits}
})()

let Card = solve.Card
let Suits = solve.Suits

let c1 = new Card('3', 'hearts')
console.log(c1);
