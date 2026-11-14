import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase Client SDK Configuration
 * Project: Royces-Digital-Solutions
 * Account: amuntumroyce@gmail.com
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKeyForDevelopment12345",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "royces-digital-solutions.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "Royces-Digital-Solutions",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "royces-digital-solutions.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:abcdef123456",
};

// Initialize Firebase safely
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export default app;
