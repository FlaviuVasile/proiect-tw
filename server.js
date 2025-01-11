const express = require('express'); // Importer Express
const path = require('path'); // Importer le module path

const app = express(); // Créer une instance de l'application Express
const PORT = 3000; // Définir le port du serveur

// Servir les fichiers statiques (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, '/')));

// Définir des routes pour vos fichiers HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'register.html')));
app.get('/forgot-password', (req, res) => res.sendFile(path.join(__dirname, 'forgot_password.html')));
app.get('/set-password', (req, res) => res.sendFile(path.join(__dirname, 'set_password.html')));
app.get('/user-login', (req, res) => res.sendFile(path.join(__dirname, 'user_login.html')));
app.get('/user-register', (req, res) => res.sendFile(path.join(__dirname, 'user_register.html')));

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
