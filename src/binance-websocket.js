// Import required libraries
const WebSocket = require('ws');

// Binance WebSocket URL
const BINANCE_WS_URL = 'wss://stream.binance.com:9443/ws/btcusdt@ticker';

// Establish WebSocket connection
const binanceSocket = new WebSocket(BINANCE_WS_URL);
console.log('Connecting to Binance WebSocket...');

binanceSocket.on('open', () => {
    console.log('Connected to Binance WebSocket.');
});

// Handle receiving live market data
binanceSocket.on('message', (data) => {
    const marketData = JSON.parse(data);
    console.log('Live Market Data:', marketData);

    // Example: Extract price and timestamp
    const price = marketData.c; // Current price
    const eventTime = marketData.E; // Event time

    console.log(`BTC/USDT Price: ${price}, Event Time: ${new Date(eventTime)}`);

    // Implement your trading logic with real-time data below
});

binanceSocket.on('error', (error) => {
    console.error('WebSocket Error:', error);
});

binanceSocket.on('close', () => {
    console.log('Binance WebSocket connection closed.');
});