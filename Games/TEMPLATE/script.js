// Game Variables
let score = 0;
let gameRunning = false;
let gameInterval;

// DOM Elements
const scoreElement = document.getElementById('score');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const gameCanvas = document.getElementById('gameCanvas');

// Event Listeners
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', pauseGame);
resetBtn.addEventListener('click', resetGame);

// Game Functions
function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        startBtn.textContent = 'Running...';
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        
        // Start game loop
        gameInterval = setInterval(gameLoop, 100);
        
        console.log('Game Started!');
    }
}

function pauseGame() {
    if (gameRunning) {
        gameRunning = false;
        clearInterval(gameInterval);
        startBtn.textContent = 'Resume';
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        
        console.log('Game Paused!');
    }
}

function resetGame() {
    gameRunning = false;
    clearInterval(gameInterval);
    score = 0;
    updateScore();
    
    startBtn.textContent = 'Start Game';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    
    // Reset game state
    gameCanvas.innerHTML = '<p>Game Reset! Click Start to play.</p>';
    
    console.log('Game Reset!');
}

function gameLoop() {
    // Main game logic goes here
    // This function runs every 100ms when game is active
    
    // Example: Increment score
    score += 1;
    updateScore();
    
    // Add your game logic here
    updateGameDisplay();
}

function updateScore() {
    scoreElement.textContent = score;
}

function updateGameDisplay() {
    // Update game visuals
    gameCanvas.innerHTML = `
        <div style="color: #00f5ff; font-size: 2rem;">
            <p>Game Running...</p>
            <p>Score: ${score}</p>
            <p>Add your game logic here!</p>
        </div>
    `;
}

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
    gameCanvas.innerHTML = '<p style="color: white; font-size: 1.5rem;">Click Start Game to begin!</p>';
    pauseBtn.disabled = true;
});

// Mobile touch support
gameCanvas.addEventListener('touchstart', function(e) {
    e.preventDefault();
    // Handle touch events for mobile
});

// Keyboard controls
document.addEventListener('keydown', function(e) {
    if (!gameRunning) return;
    
    switch(e.key) {
        case ' ':
            e.preventDefault();
            // Handle spacebar
            break;
        case 'ArrowUp':
            e.preventDefault();
            // Handle up arrow
            break;
        case 'ArrowDown':
            e.preventDefault();
            // Handle down arrow
            break;
        case 'ArrowLeft':
            e.preventDefault();
            // Handle left arrow
            break;
        case 'ArrowRight':
            e.preventDefault();
            // Handle right arrow
            break;
    }
});