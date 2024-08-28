function randomColor() {
    
    return{
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

function darkerColor(color, factor) {
    return{
        r: Math.floor(color.r * factor),
        g: Math.floor(color.g * factor),
        b: Math.floor(color.b * factor)
    };
}

function colorToString(color) {
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
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

        let color = null;
        let interaction = 0;



        square.addEventListener('mouseover', function(){
            if (interaction === 0){
                color = randomColor();
                square.style.backgroundColor = colorToString(color)
            } else if(interaction < 10){
                color = darkerColor(color,0.8)
                square.style.backgroundColor = colorToString(color);
            }
            
            interaction++
        });

        container.appendChild(square)
    }
}

function gridResize () {
    let squaresOnGrid = parseInt(prompt('Enter the number of squares you want!!!!', 16),10);

    if(squaresOnGrid > 0 && squaresOnGrid <= 100) {
        createGrid(squaresOnGrid);
    }else {
        alert('Enter a number between 1 to 100');
    }
}

window.onload = createGrid;
createGrid(16);

const btn = document.querySelector('#prompt-btn')
btn.addEventListener('click',gridResize)
