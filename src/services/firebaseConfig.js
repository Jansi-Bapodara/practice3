const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccount-key.json');

// 1. Prevent multiple initializations (prevents errors during hot-reloads)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log("🔥 Firebase Connection Established Successfully!");
}

// 2. Initialize Firestore
const db = admin.firestore();

// 3. Export the db so actorServices.js can use it
module.exports = { db };
