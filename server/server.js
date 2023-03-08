const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/1', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/2', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.listen(3005);