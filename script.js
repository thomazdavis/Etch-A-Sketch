const container = document.getElementById('container');
const resetButton = document.getElementById('reset-btn');
const gridSize = 16;

function createGrid(squaresPerSide) {
    container.innerHTML = '';

    const squareSize = 960 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        let noOfInteractions = 0;

        square.addEventListener('mouseover', () => {
            if (noOfInteractions === 0) {
                square.style.backgroundColor = 'blue';
                square.style.opacity = '0.1';
            } else if (noOfInteractions < 10) {
                square.style.opacity = (parseFloat(square.style.opacity) + 0.1).toString();
            }
            noOfInteractions++;
        });
    
        container.appendChild(square);
    }
}

// initial grid of size 16x16
createGrid(16);

resetButton.addEventListener('click', () => {
    let squaresPerSide = prompt('Enter the number of squares per side (max 100):', 16);

    squaresPerSide = parseInt(squaresPerSide);
    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
        alert('Please enter a valid number between 1 and 100');
        return;
    }

    createGrid(squaresPerSide);
});