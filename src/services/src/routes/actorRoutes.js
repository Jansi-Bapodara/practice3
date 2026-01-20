const express = require('express');
const router = express.Router();
// Import your service functions
const { 
  getAllActors, 
  getActionHeroes, 
  updateActorVibe, 
  deleteActor 
} = require('../services/actorService');

// Map URLs to functions
router.get('/', async (req, res) => {
  const actors = await getAllActors();
  res.json(actors); // Send data back to the browser
});

router.get('/action', async (req, res) => {
  const heroes = await getActionHeroes();
  res.json(heroes);
});

// Use :id for dynamic updates/deletes
router.put('/:id', async (req, res) => {
  await updateActorVibe(req.params.id, req.body.vibe);
  res.send("Actor Updated!");
});

module.exports = router;