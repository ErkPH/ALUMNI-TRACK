const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let alumniData = JSON.parse(fs.readFileSync('data_alumni_final.json'));

const AUTH = { user: "admin", pass: "umm2024" };

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === AUTH.user && password === AUTH.pass) res.json({ success: true });
    else res.status(401).json({ success: false });
});

app.get('/api/stats', (req, res) => {
    const verified = alumniData.filter(i => i.is_verified === 1).length;
    res.json({ total: alumniData.length, verified, pending: alumniData.length - verified });
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

app.listen(3000, () => console.log("Server aktif di port 3000"));