// updating sketches
const socket = io();

socket.on('file-changed', (path) => {
    console.log('Sketch file changed:', path);
    // Reload the sketch file
    location.reload();
});