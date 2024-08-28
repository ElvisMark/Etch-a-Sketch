function randomColor() {
    const hexLetters = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hexLetters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function createGrid(squaresOnGrid) {
    const container = document.querySelector('#square-container')

    container.innerHTML= '';

    const squareSize =960 / squaresOnGrid;

    container.style.gridTemplateColumns =`repeat(${squaresOnGrid}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${squaresOnGrid}, ${squareSize}px)`


    for(let i = 0; i < squaresOnGrid * squaresOnGrid; i++){
        const square = document.createElement('div')
        square.className = 'square';
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`

        square.style.backgroundColor = randomColor();


        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = '#073f3f'
        })

        container.appendChild(square)
    }
}

function gridResize () {
    let squaresOnGrid = parseInt(prompt('Enter the number of squares per side between 1 and 100:'),10);

    if(squaresOnGrid > 0 && squaresOnGrid <= 100) {
        createGrid(squaresOnGrid);
    }else {
        alert('Enter a number between 1 to 100');
    }
}

window.onload = createGrid;
// createGrid(16);

const btn = document.querySelector('#prompt-btn')
btn.addEventListener('click',gridResize)
