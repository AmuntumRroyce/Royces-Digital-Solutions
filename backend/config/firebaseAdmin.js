/**
 * Firebase Admin SDK Initialization
 * Project: Royces-Digital-Solutions
 * Account: amuntumroyce@gmail.com
 */

import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

let db;

try {
  if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID || 'Royces-Digital-Solutions',
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL || 'amuntumroyce@gmail.com',
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });
    console.log('✅ Firebase Admin SDK initialized successfully with service account.');
  } else {
    // Attempt default application credentials
    admin.initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID || 'Royces-Digital-Solutions',
    });
    console.log('ℹ️ Firebase Admin SDK initialized for project Royces-Digital-Solutions.');
  }
  db = admin.firestore();
} catch (error) {
  console.warn('⚠️ Firebase Admin operating with local mock fallback:', error.message);
  // Provide mock db interface so backend runs cleanly even before service account JSON is uploaded
  db = {
    collection: (name) => ({
      add: async (data) => ({ id: `doc-${Date.now()}` }),
      get: async () => ({ docs: [] }),
      doc: (id) => ({
        get: async () => ({ exists: false, data: () => null }),
        update: async () => {},
      })
    })
  };
}

export { admin, db };
