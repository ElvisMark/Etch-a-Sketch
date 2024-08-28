function createGrid(squaresPerSide) {
    const container = document.querySelector('#square-container')

    container.innerHTML= '';

    const squareSize =960 / squaresPerSide;

    container.style.gridTemplateColumns =`repeat(${squaresPerSide}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, ${squareSize}px)`


    for(let i = 0; i < squaresPerSide * squaresPerSide; i++){
        const square = document.createElement('div')
        square.className = 'square';
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`


        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = '#073f3f'
        })

        container.appendChild(square)
    }
}

function gridResize () {
    let squaresPerSide = parseInt(prompt('Enter the number of squares per side between 1 and 100:'),10);

    if(squaresPerSide > 0 && squaresPerSide < 100) {
        createGrid(squaresPerSide);
    }else {
        alert('Enter a number between 1 to 100');
    }
}

window.onload = createGrid;
createGrid(16);

document.getElementById('prompt-btn').addEventListener('click', gridResize)