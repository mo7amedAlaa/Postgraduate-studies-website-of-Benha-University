import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD8jPjrSeQY58SpDQ8KDXnGZbwYS2nfSlA',
  authDomain: 'graduation-project-608ae.firebaseapp.com',
  projectId: 'graduation-project-608ae',
  storageBucket: 'graduation-project-608ae.appspot.com',
  messagingSenderId: '822326349568',
  appId: '1:822326349568:web:cc0c26e2d70cc7d1dcade5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
