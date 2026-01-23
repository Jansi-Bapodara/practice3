const express = require('express');
const app = express();
const path = require('path');

// FIXED: Use './' because actorService.js is in the same folder as server.js
const { 
    getAllActors, 
    getActionHeroes, 
    updateActorVibe 
} = require('./actorService'); 

// FIXED: Ensure the path to the routes folder is correct
const actorRoutes = require('./routes/actorRoutes');

app.use(express.json());

// Serve the frontend from the public folder
app.use(express.static(path.join(__dirname, '../../public')));

app.use('/api/actors', actorRoutes);

app.listen(3000, () => {
    console.log("🎬 Bollywood Server is LIVE at http://localhost:3000");
});