require('dotenv').config(); // Membaca file .env
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');

const app = express();
app.use(cors()); // Mengizinkan akses dari luar
app.use(express.json());

// 1. Validasi Token: Pastikan .env terbaca
if (!process.env.BOT_TOKEN) {
    console.error('❌ ERROR: BOT_TOKEN tidak ditemukan! Pastikan file .env ada di folder yang sama dan isinya benar.');
    process.exit(1);
}

// 2. Hubungkan ke Bot Telegram
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
const chatId = process.env.CHAT_ID;

console.log("⏳ Sedang menyambungkan ke server Telegram...");

// 3. Tangkap Error Polling (Biar nggak diam-diam crash)
bot.on('polling_error', (error) => {
    console.error('❌ Polling Error:', error.code);
    if (error.code === 'ETELEGRAM' && error.response?.statusCode === 409) {
        console.error('⚠️ KONFLIK: Ada bot lain yang jalan dengan token yang sama! Pastikan tidak ada terminal/CMD lain yang menjalankan node index.js.');
    } else if (error.code === 'EFATAL') {
        console.error('⚠️ KONEKSI GAGAL: Cek koneksi internet kamu atau coba pakai proxy/VPN jika Telegram sedang diblokir provider.');
    }
});

// 4. Tes Ombak: Kalau ada yang kirim /start, bot akan membalas!
bot.onText(/\/start/, (msg) => {
    console.log(`✅ Dapet pesan /start dari ${msg.chat.first_name}`);
    bot.sendMessage(msg.chat.id, 'Halo! Aku siap jadi Drive pribadimu. 🚀\nTunggu UI-nya ya!');
});

// Tes server web
app.get('/', (req, res) => {
    res.send('Server Hijau Drive sedang berjalan!');
});

// Jalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server web berjalan di http://localhost:${PORT}`);
    console.log("✅ Bot berhasil nyambung! Sekarang coba kirim /start di Telegram.");
});