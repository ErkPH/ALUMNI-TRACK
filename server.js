const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path'); // Tambahkan path untuk handle lokasi file

const app = express();

app.use(cors());
app.use(express.json());

// Gunakan process.cwd() agar Vercel mencari file di root directory project
const dataPath = path.join(process.cwd(), 'data_alumni_final.json');

// Gunakan try-catch agar server tidak langsung crash jika file JSON belum terbaca
let alumniData = [];
try {
    const rawData = fs.readFileSync(dataPath, 'utf8');
    alumniData = JSON.parse(rawData);
    console.log("Database loaded successfully");
} catch (err) {
    console.error("Error reading database file:", err.message);
}

const AUTH = { user: "admin", pass: "umm2024" };

// Route untuk serve file statis (HTML, CSS, JS) di Vercel
app.use(express.static(path.join(process.cwd())));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === AUTH.user && password === AUTH.pass) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

app.get('/api/stats', (req, res) => {
    const verified = alumniData.filter(i => i.is_verified === 1).length;
    res.json({ 
        total: alumniData.length, 
        verified, 
        pending: alumniData.length - verified 
    });
});

app.get('/api/search', (req, res) => {
    const q = req.query.q ? req.query.q.toLowerCase() : '';
    const page = parseInt(req.query.page) || 1;
    const limit = 50;
    const startIndex = (page - 1) * limit;

    let filtered = alumniData;
    if (q) {
        filtered = alumniData.filter(i => 
            (i['Nama Lulusan'] && i['Nama Lulusan'].toLowerCase().includes(q)) || 
            (i['NIM'] && i['NIM'].toString().includes(q))
        );
    }

    res.json({
        data: filtered.slice(startIndex, startIndex + limit),
        totalPage: Math.ceil(filtered.length / limit),
        currentPage: page
    });
});

// Penting untuk Vercel: Export app sebagai module
module.exports = app;

// Tetap simpan listen untuk testing di lokal
const PORT = 3000;
app.listen(PORT, () => console.log(`Server aktif di port ${PORT}`));