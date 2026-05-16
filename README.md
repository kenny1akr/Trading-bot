# Trading Bot Project

## Overview
This project is a full-featured trading bot that:
- Scrapes data via Puppeteer
- Fetches real-time trading data from Binance WebSocket API
- Visualizes live price updates on a dashboard
- Allows for configuration of trading strategies and risk management

## Features
- **Web Scraping**: Scrapes website data as an additional data feed.
- **Live Trading Data Integration**: Connects to Binance WebSocket API to fetch live trading data.
- **Configurable Strategies**: Allows for custom trading strategies via a JSON configuration file.
- **Real-Time Visualization**: Displays live price updates in an interactive dashboard using Chart.js.
- **Risk Management**: Includes settings for stop-loss, take-profit, and position sizing.
- **Web-Based Dashboard**: Provides a responsive, real-time visualization of the BTC/USDT market.

## Prerequisites
To run this project, you will need:
- **Node.js** (v16 or higher recommended)
- **npm** (Node Package Manager)
- Binance API key and secret (for interacting with Binance API)

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kenny1akr/Trading-bot.git
   cd Trading-bot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Binance API Keys**
   - Create a `.env` file in the project root directory.
   - Add your Binance API key and secret:
     ```
     BINANCE_API_KEY=your_api_key_here
     BINANCE_API_SECRET=your_api_secret_here
     ```

4. **Modify Trading Strategy (Optional)**
   - Open the `config/strategy-config.json` file and customize your trading strategy:
     ```json
     {
       "strategy": {
         "movingAverage": {
           "enabled": true,
           "shortWindow": 5,
           "longWindow": 20
         }
       },
       "riskManagement": {
         "stopLoss": 0.02,
         "takeProfit": 0.05,
         "positionSize": 0.01
       }
     }
     ```

5. **Start the Backend Server**
   ```bash
   node backend/server.js
   ```

6. **Access the Dashboard**
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
   - Visualize real-time price updates and interact with the trading bot.

## File Structure
- `src/`: Contains the bot logic and API integration scripts.
  - `trading-bot.js`: Scrapes data via Puppeteer.
  - `binance-websocket.js`: Fetches live Binance data.
- `backend/`: Backend server for WebSocket and dashboard.
  - `server.js`: Express server for visualization and WebSocket streaming.
- `public/`: Frontend dashboard implementation.
  - `index.html`: Main dashboard with a real-time chart.
  - `style.css`: Styles for the dashboard.
  - `app.js`: WebSocket logic for real-time updates.
- `config/`: Configuration files.
  - `strategy-config.json`: User-defined strategy and risk management parameters.

## Notes
- Make sure to install all required dependencies before running the project.
- By default, the bot connects to Binance WebSocket for BTC/USDT ticker data.
- **Always review and test the bot in paper trading mode before using real funds.**

## Contribution
Feel free to fork this repository, submit issues, or suggest new features via pull requests.
