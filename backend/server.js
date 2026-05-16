const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

// Initialize Express app and server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3000;

// Serve static files for the dashboard
app.use(express.static(path.join(__dirname, '../public')));

// WebSocket connection for live updates
io.on('connection', (socket) => {
    console.log('Client connected to WebSocket');

    // Emit mock data periodically (replace with real-time data)
    setInterval(() => {
        const data = {
            price: (Math.random() * 50000 + 25000).toFixed(2), // Mock BTC price
            timestamp: new Date().toISOString()
        };
        socket.emit('priceUpdate', data);
    }, 1000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});