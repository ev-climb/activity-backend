// firebaseAdmin.js
import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };
}

const db = admin.firestore();

export { admin, db };
