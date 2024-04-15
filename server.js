const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Définir le répertoire des ressources statiques (le répertoire où se trouve votre jeu)
app.use(express.static(path.join(__dirname)));

// Route pour servir le fichier index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});