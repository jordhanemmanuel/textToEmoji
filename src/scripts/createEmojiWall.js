const cfg = require('../configs/globalVariables')

const convertEmojis = (matrix, primary, secondary) => {
    let result = ""
    for (let y = 0; y < cfg.rows; y++) {
        for (let x = 0; x < matrix.length; x++) {
            if (x > 0) result = `${result}:${secondary}: `
            for (let z = 0; z < cfg.columns; z++) {
                if (matrix[x][y][z]) {
                    result = `${result}:${primary}: `
                } else {
                    result = `${result}:${secondary}: `
                }  
            }
            
        }
            result+= '\n'
    }
    return result
}

module.exports = {convertEmojis}