import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDyUKp5w_L_D0CwMzzKhbiTlnOgxjIjIFY',
  authDomain: 'chat-aa376.firebaseapp.com',
  projectId: 'chat-aa376',
  storageBucket: 'chat-aa376.appspot.com',
  messagingSenderId: '616387787529',
  appId: '1:616387787529:web:7c6c0934d0ae0eaf6971d8',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
