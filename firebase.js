import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDh4V2AGPzTOfAmK1ohE67or3jQ975DvQU',
  authDomain: 'portfolio-clones.firebaseapp.com',
  databaseURL: 'https://portfolio-clones.firebaseio.com',
  projectId: 'portfolio-clones',
  storageBucket: 'portfolio-clones.appspot.com',
  messagingSenderId: '1080338138283',
  appId: '1:1080338138283:web:61cc28097cc0047900a3ee',
  measurementId: 'G-P4L1DLFXLM',
};

const app = getApps().length < 1 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
