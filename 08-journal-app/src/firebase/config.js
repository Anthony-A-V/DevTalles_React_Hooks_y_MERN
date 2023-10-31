// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYM0JrnWke1PCI_lb3_eZHjJBCRbtmCtQ',
  authDomain: 'react-cursos-e8d4b.firebaseapp.com',
  projectId: 'react-cursos-e8d4b',
  storageBucket: 'react-cursos-e8d4b.appspot.com',
  messagingSenderId: '598469881075',
  appId: '1:598469881075:web:1a3afa08cbe1b9a3131b86',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
