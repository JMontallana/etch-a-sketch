//set variable for color to access it in dom
let color = 'black';

let click = true;

//create a div inside class board.
function createDiv(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => {
        div.remove();
    })
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size; //input * input
    for( let i = 1; i <= amount; i++ ) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', colorSquare)//event changes the background color
        board.append(square)
    }
}

//changes the color function
function colorSquare() {
    if(click){
        if(color === 'rainbow') {
            this.style.backgroundColor = 'hsl(' + (360 * Math.random()) + ',50%,50%)'
        } else [
            this.style.backgroundColor = color
        ]
    }
}

//changeColor of colorSquare
function changeColor(choice) {
    color = choice;
}

//change the boardsize can only accept 2 - 100 number
function changeSize(input) {
    if(input >= 2 && input <= 100) {
        createDiv(input);
    } else {
        const error = document.querySelector('.error');
        error.style.color = 'red';
        error.textContent = 'Please input a number from 2 - 100';
    }
}

//handle a click event to toogle mouseover on/off
document.querySelector('body').addEventListener('click', (e) => {
   if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
        click = !click
        if(click) {
            const mode = document.querySelector('.mode');
            mode.textContent = 'Mode: Coloring'
            mode.style.color = 'Green'
        } else {
            const mode = document.querySelector('.mode');
            mode.textContent = "Mode: Not Coloring";
            mode.style.color = 'red';

        }
    }
})

//reset button
function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => {
        div.style.backgroundColor = 'white';
    })
}

createDiv(16);
