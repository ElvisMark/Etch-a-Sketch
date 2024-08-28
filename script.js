function createGrid() {
    const container = document.querySelector('#square-container')


    for(let i = 0; i < 256; i++){
        const square = document.createElement('div')
        square.className = 'square';

        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = '#073f3f'
        })

        // square.addEventListener('mouseout', function(){
        //     square.style.backgroundColor = '#ab48c9'
        // })


        container.appendChild(square)
    }
}

window.onload = createGrid;