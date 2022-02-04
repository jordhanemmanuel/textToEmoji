
//a ideia disso aqui foi usar array como matrizes, obviamente a ideia é meio esquisita, mas foi legal o desafio
//e sim, funciona

const teste = () =>  console.log(matrix)

let matrix = Array(7*4).fill(false) //matriz de 7 colunas e 4 linhas
const getCharToMatrix = (s) => {
    switch (s) {
        case '&': return matrix
        case '0': 
            setColumn(0)
            setColumn(6)
            setRow(0)
            setRow(3)
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
            //setPosition(4,1)
            //setPosition(4,2)
            //setPosition(0,4)
            //setPosition(0,5)
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
    return matrix
}

const setPosition = (column, row) => {
    console.log(`entrou   c = ${column}, valor de l = ${row}`)
    let position = column + row;
    if (column > 3 || row > 6 || column < 0 || row < 0) 
        return //se o range esta fora, retorna
    else if (row > 0) {
        row++;
        column++;
        position = row * 4 - column
    }

    console.log(`valor de c = ${column}, valor de l = ${row}, soma ${position} `)
    matrix[position] = true
}

const setColumn = (n) => {
    for(let i = 0; i < 7; i++)
        setPosition(n,i)    
}

const setRow = (n) => {
    for(let i = 0; i < 4; i++)
        setPosition(i,n)    
}

module.exports = {teste , getCharToMatrix}