function solution(command) {
    let that = this
    let commands = {
        upvote: () => {
            that.upvotes++
        },
        downvote: () => {
            that.downvotes++
        },
        score: () => {
            let res = [that.upvotes, that.downvotes]
            if (that.upvotes + that.downvotes > 50) {
                res = res.map(x => x + Math.ceil(Math.max(that.upvotes, that.downvotes) * 0.25))
            }
            res.push(res[0] - res[1])
            if (that.upvotes + that.downvotes < 10) res.push('new')
            else if (that.upvotes * 100 / (that.upvotes + that.downvotes) > 66) res.push('hot')
            else if ((that.upvotes > 100 || that.downvotes > 100) && that.upvotes >= that.downvotes) res.push('controversial')
            else if (that.upvotes < that.downvotes) res.push('unpopular')
            else res.push('new')
            return res
        }
    }
    return commands[command]()
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');          // (executed 50 times)
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']

console.log(post)
console.log(score)

