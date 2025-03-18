const colors = [
    '#FF5733', // Orange
    '#33FF57', // Green
    '#3357FF', // Blue
    '#FF33A1', // Pink
    '#33FFF5'  // Cyan
];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length); // Random index
    return colors[randomIndex]; // Return a random color from the array
}

function changeColors() {
    const backgroundColor = getRandomColor(); // Random background color
    const textColor = getRandomColor(); // Random text color

    document.body.style.backgroundColor = backgroundColor; // Set background color
    document.getElementById('clock').style.color = textColor; // Set text color
}

// Change the colors every 5 seconds
setInterval(changeColors, 5000);

// Set the initial colors
changeColors();

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();