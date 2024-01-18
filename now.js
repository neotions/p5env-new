/* !!!!! THIS IS THE CLIENT JS !!!!! */
// updating sketches
const socket = io();

socket.on('file-changed', (path) => {
    console.log('Sketch file changed:', path);
    // Reload the sketch file
    location.reload();
});



/* !!!!! THIS IS THE SERVER JS !!!!! */

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const chokidar = require('chokidar');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Watching 'sketches' directory for changes
const watcher = chokidar.watch('./public/sketches', { ignored: /^\./, persistent: true });

watcher.on('change', (path) => {
    console.log(`File ${path} has been changed`);
    io.emit('file-changed', path);
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
