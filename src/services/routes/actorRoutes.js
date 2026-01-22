const express = require('express');
const router = express.Router();

// Corrected Path: Go up one level from 'routes' folder to 'services' folder
// Removed the duplicate 'const actorService' line to keep code clean
const { 
  getAllActors, 
  getActionHeroes, 
  updateActorVibe, 
  deleteActor 
} = require('../actorService'); 

// Map URLs to functions
router.get('/', async (req, res) => {
  try {
    const actors = await getAllActors();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ error: "Error fetching actors" });
  }
});

router.get('/action', async (req, res) => {
  try {
    const heroes = await getActionHeroes();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching heroes" });
  }
});

// Use :id for dynamic updates
router.put('/:id', async (req, res) => {
  try {
    // Ensure you are passing the correct arguments to your service function
    await updateActorVibe(req.params.id, req.body.vibe);
    res.send("Actor Updated!");
  } catch (error) {
    res.status(500).send("Update failed");
  }
});

module.exports = router;