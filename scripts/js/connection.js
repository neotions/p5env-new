// Updating sketches
const socket = io();

socket.on('file-changed', (path) => {
    console.log('Sketch file changed:', path);
    const scriptElement = document.getElementById('p5script');

    // If the changed file is the current sketch, update the src attribute
    if (scriptElement.src.includes(path)) {
        // Change the timestamp query to avoid caching issues
        scriptElement.src = `/sketches/${path}?ts=${new Date().getTime()}`;
    }
});

// Function to update the sketch based on selection
function updateSketch(selectedSketch) {
    const scriptElement = document.getElementById('p5script');
    scriptElement.src = `/sketches/${selectedSketch}?ts=${new Date().getTime()}`;
}

// Populate the sketch selector menu
const sketchSelector = document.getElementById('sketch-selector');
sketchSelector.addEventListener('change', (e) => {
    updateSketch(e.target.value);
});

// Assuming you have a list of sketches
const sketches = ['sketch1.js', 'sketch2.js', 'sketch3.js']; // etc...

// Populate the options dynamically
sketches.forEach((sketch) => {
    const option = document.createElement('option');
    option.value = sketch;
    option.textContent = sketch;
    sketchSelector.appendChild(option);
});
