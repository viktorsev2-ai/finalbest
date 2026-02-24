// api/bybit.js
export default async function handler(req, res) {
    // Разрешаем CORS для вашего фронтенда
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    try {
        const response = await fetch('https://api.bybit.com/v5/market/tickers?category=linear');
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}