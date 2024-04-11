const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});
app.get('/index.css', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.css'));
});
app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'app.js'));
});
app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
