const admin = require('firebase-admin');

// IMPORTANT: It's better to point directly to the file if it's in the same folder
const serviceAccount = require('./serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function addActor(actorObj) {
  try {
    const res = await db.collection('actors').add(actorObj);
    console.log('🎬 Success! Added actor ID:', res.id);
  } catch (e) {
    console.error('❌ Error adding actor:', e);
  }
}

addActor({
  name: "Hrithik Roshan",
  height: "5'11\"",
  age: 50,
  dancing_skill: 10,
  vibe: "Action Hero"
});