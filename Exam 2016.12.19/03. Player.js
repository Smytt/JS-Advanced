class Player {
    constructor(nickname) {
        this.nickname = nickname
        this.scoreList = []
    }

    static Constructor(nickname) {
        return new Player(nickname)
    }

    addScore(score) {
        if (/^-{0,1}\d+(\.\d+)?$/.test('' + score)) {
            this.scoreList.push(Number(score))
            this.scoreList.sort((a, b) => b - a)
        }
        return this
    }

    get scoreCount() {
        return this.scoreList.length
    }

    get highestScore() {
        return this.scoreList[0]
    }

    get topFiveScore() {
        return this.scoreList.slice(0, 5)
    }

    toString() {
        let scores = this.scoreList.join(',')
        return `${this.nickname}: [${scores}]`
    }
}


let p = new Player('Trotro');

p.addScore('Pesho');
console.log(p.toString());
console.log(p.highestScore);
console.log(p.topFiveScore.length);
console.log(p.scoreCount);
p.addScore('123');
console.log(p.toString());
console.log(p.highestScore);
console.log(p.topFiveScore[0]);
console.log(p.scoreCount);
