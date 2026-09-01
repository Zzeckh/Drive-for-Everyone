require('dotenv').config(); // Membaca file .env
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');

const app = express();
app.use(cors()); // Mengizinkan akses dari luar
app.use(express.json());

// 1. Hubungkan ke Bot Telegram
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
const chatId = process.env.CHAT_ID;

console.log("Bot sedang dijalankan... Tunggu notifikasi di Telegram!");

// 2. Tes Ombak: Kalau ada yang kirim /start, bot akan membalas!
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Halo! Aku siap jadi Drive pribadimu. 🚀\nTunggu UI-nya ya!');
});

// Tes server web
app.get('/', (req, res) => {
    res.send('Server Hijau Drive sedang berjalan!');
});

// Jalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});