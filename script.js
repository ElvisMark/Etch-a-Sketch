function createGrid() {
    const container = document.querySelector('#square-container')


    for(let i = 0; i < 256; i++){
        const square = document.createElement('div')
        square.className = 'square';
        container.appendChild(square)
    }
}

window.onload = createGrid;