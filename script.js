const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Function to handle mouse click event
canvas.addEventListener('click', (event) => {
    // Get the mouse position relative to the canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left; // X position
    const y = event.clientY - rect.top;  // Y position

    // Log the mouse position
    console.log(`Mouse clicked at: (${x}, ${y})`);

    // Optionally, you can draw something at the clicked position
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2); // Draw a circle
    ctx.fill();
});

// Function to handle mouse movement
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Log the mouse position while moving
    console.log(`Mouse moved at: (${x}, ${y})`);
});

