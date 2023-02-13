const container = document.querySelector('.container');

let sketchContainer;
let sketch;

//create a div container
function createSketchContainer() {
    const sktchCont = document.createElement('div');
    sketchContainer = sktchCont
    sketchContainer.classList.add('sketch-container');
    container.append(sketchContainer);
}

//create a sketch div
function createSketchDiv() {
    const sktchDiv = document.createElement('div');
    sketch = sktchDiv;
    sktchDiv.classList.add('sketch-div');
    sketchContainer.append(sktchDiv);
}

//run createSketchDiv 16x
function createSketch() {
    for(let i = 0; i <= 15; i++) {
        createSketchDiv();
    }
}

//run createSketch 16x
function runCreateSketch() {
    for( let i = 0; i <= 15; i++) {
        createSketch();
    }
}

createSketchContainer();
runCreateSketch();
console.log(sketch)
console.log(sketchContainer)



