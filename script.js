const input = document.querySelector('input');

function createDiv(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => {
        div.remove();
    })
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size;
    for( let i = 1; i <= amount; i++ ) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
        board.append(square)
    }
}

createDiv(16)

function changeSize(input) {
    createDiv(input);
}

