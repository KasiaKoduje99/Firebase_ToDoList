// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD51lWB12olcTK__t6ja_EVELDci-c6ORw',
  authDomain: 'fir-sda-d539c.firebaseapp.com',
  databaseURL:
    'https://fir-sda-d539c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-sda-d539c',
  storageBucket: 'fir-sda-d539c.appspot.com',
  messagingSenderId: '217241407572',
  appId: '1:217241407572:web:7d3b463272e38b7e581dc1',
  measurementId: 'G-KW1RZJF4QR',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const firestore = getFirestore(app);
