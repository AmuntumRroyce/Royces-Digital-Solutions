import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Real Live Firebase Configuration
 * Project: royces-digital-solutions
 * Account: amuntumroyce@gmail.com
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAosIDJTo8kq-S0-5KO9xjhylJpuaFdr4g",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "royces-digital-solutions.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "royces-digital-solutions",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "royces-digital-solutions.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "239738590635",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:239738590635:web:81e868e45120be43a1aeee",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-2K2SMKV10M",
};

// Initialize Firebase cleanly
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export default app;
