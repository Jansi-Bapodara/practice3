async function addActor(actorObj) {
  if (!actorObj.name) {
    console.error("❌ Error: Actor name is required!");
    return;
  }
}

// Import the database connection from your database.js file
const db = require('./firebaseConfig.js');

async function getAllActors() {
  try {
    const snapshot = await db.collection('actors').get();
    console.log("🎬 Total Stars Found:", snapshot.size);
    snapshot.forEach(doc => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (e) {
    console.error('❌ Fetch Error:', e.message);
  }
}

async function getActionHeroes() {
  try {
    const stars = await db.collection('actors')
      .where('vibe', '==', 'Action Hero')
      .where('dancing_skill', '>=', 9)
      .get();
    
    stars.forEach(doc => console.log('🔥 Action Star:', doc.data().name));
  } catch (e) {
    console.error('❌ Query Error:', e.message);
  }
}

async function updateActorVibe(actorId, newVibe) {
  try {
    const actorRef = db.collection('actors').doc(actorId);
    await actorRef.update({ vibe: newVibe });
    console.log(`✅ Actor ${actorId} updated to ${newVibe}!`);
  } catch (e) {
    console.error('❌ Update Error:', e.message);
  }
}

async function deleteActor(actorId) {
  try {
    await db.collection('actors').doc(actorId).delete();
    console.log(`🗑️ Deleted actor with ID: ${actorId}`);
  } catch (e) {
    console.error('❌ Delete Error:', e.message);
  }
}

// Export the functions so you can use them in other parts of your app
module.exports = {
  getAllActors,
  getActionHeroes,
  updateActorVibe,
  deleteActor
};

// TEST: Uncomment the line below to test if it works when you run 'node src/services/actorServices.js'
// getAllActors();
