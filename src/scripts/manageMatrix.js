
const teste = () =>  console.log(matrix)

let matrix;
let wordPos;

const createMatrix = (w, numColumn = 4, numRow = 7) => {
    //[letra][linha][coluna]
    matrix = Array(w.length).fill(null).map(() => Array(numRow).fill(null).map(() => Array(numColumn).fill(false)));
    for(wordPos = 0; wordPos < w.length; wordPos++) {
        getCharToMatrix(w.charAt(wordPos).toUpperCase())
    }
    return matrix
}

const getCharToMatrix = (strChar) => {
    switch (strChar) {
        case '&': break
        case '0': 
            setColumn(0)
            setColumn(3)
            setRow(0)
            setRow(6)
            break
        case '1': 
            setColumn(1)
            setColumn(2)
            setRow(6)
            setPosition(0,1)
            setPosition(0,2)
            break
        case '2': 
            setRow(0)
            setRow(3)
            setRow(6)
            setPosition(3,1)
            setPosition(3,2)
            setPosition(0,4)
            setPosition(0,5)
            break
        case '3': break
        case '4': break
        case '5': break
        case '6': break
        case '7': break
        case '8': break
        case '9': break
        case 'A': break
        case 'B': break
        case 'C': break
        case 'D': break
        case 'E': break
        case 'F': break
        case 'G': break
        case 'H': break
        case 'I': break
        case 'J': break
        case 'K': break
        case 'L': break
        case 'M': break
        case 'N': break
        case 'O': break
        case 'P': break
        case 'Q': break
        case 'R': break
        case 'S': break
        case 'T': break
        case 'U': break
        case 'V': break
        case 'W': break
        case 'X': break
        case 'Y': break
        case 'Z': break
    }
}

const setPosition = (column, row) => {
    matrix[wordPos][row][column] = true
}

const setColumn = (columnPos) => {
    for(let i = 0; i < 7; i++)
        matrix[wordPos][i][columnPos] = true    
}

const setRow = (rowPos) => {
    for(let i = 0; i < 4; i++)
        matrix[wordPos][rowPos][i] = true  
}

module.exports = {teste , getCharToMatrix, createMatrix}