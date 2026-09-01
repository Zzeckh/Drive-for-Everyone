require('dotenv').config();
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Setup Folder Public untuk UI Web
app.use(express.static(path.join(__dirname, 'public')));

// Validasi Token
if (!process.env.BOT_TOKEN) {
    console.error('❌ ERROR: BOT_TOKEN tidak ditemukan di .env');
    process.exit(1);
}

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
const chatId = process.env.CHAT_ID;

// 2. Setup Database Sederhana (JSON)
const DB_FILE = path.join(__dirname, 'db.json');
if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, '[]');
const getDB = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
const saveDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

// 3. Setup Multer (Memory Storage biar nggak nyampah di hardisk)
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 } // Batas 50MB (Batas wajar Telegram)
});

console.log("⏳ Sedang menyambungkan ke server Telegram...");

bot.on('polling_error', (error) => {
    console.error('❌ Polling Error:', error.code);
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Halo! Aku siap jadi Drive pribadimu. 🚀\nSilakan buka web UI-nya untuk upload file!');
});

// ENDPOINT: Upload File dari UI
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'File tidak ditemukan' });

        console.log(`⬆️ Menerima file: ${req.file.originalname}`);

        // Upload ke Telegram
        const sentMessage = await bot.sendDocument(chatId, req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype,
        });

        const fileId = sentMessage.document.file_id;
        const fileIdGen = Date.now().toString(36) + Math.random().toString(36).substr(2);

        const newFile = {
            id: fileIdGen,
            filename: req.file.originalname,
            telegram_file_id: fileId,
            size: req.file.size,
            uploadedAt: new Date().toISOString()
        };

        const db = getDB();
        db.push(newFile);
        saveDB(db);

        console.log(`✅ Sukses upload ke Telegram: ${req.file.originalname}`);
        res.json({ success: true, file: newFile });
    } catch (error) {
        console.error('❌ Upload error:', error.message);
        res.status(500).json({ error: 'Gagal upload ke Telegram' });
    }
});

// ENDPOINT: Ambil List File buat UI
app.get('/files', (req, res) => {
    res.json(getDB());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server & UI berjalan di http://localhost:${PORT}`);
    console.log("✅ Bot berhasil nyambung! Buka browser dan coba upload file.");
});