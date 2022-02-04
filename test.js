const mg = require('./src/scripts/manageMatrix')
const ce = require('./src/scripts/createEmojiWall')
const cfgs = require('./src/configs/globalVariables')

//let testinho = Array(7).fill(null).map(() => Array(4).fill(false));
//let testinho = Array(2).fill(null).map(() => Array(7).fill(null).map(() => Array(4).fill(false)));
//let testinho = Array(4).fill(null).map(() => Array(7).fill(null).map(() => Array(2).fill(false)));

// testinho[1][3][2] = true
// testinho[1][1][1] = true
// console.table(testinho)
// console.table(testinho[0])
// console.table(testinho[1])

let matrix = mg.createMatrix(''+20)
resultado = ce.convertEmojis(matrix, 'PogU', 'PepeEz')
console.table(matrix[0])
console.table(matrix[1])
console.log(resultado)