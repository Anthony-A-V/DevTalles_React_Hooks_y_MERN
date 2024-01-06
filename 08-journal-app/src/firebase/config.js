// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// console.log(process.env);
// console.log(import.meta.env)

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: 'AIzaSyAYM0JrnWke1PCI_lb3_eZHjJBCRbtmCtQ',
//   authDomain: 'react-cursos-e8d4b.firebaseapp.com',
//   projectId: 'react-cursos-e8d4b',
//   storageBucket: 'react-cursos-e8d4b.appspot.com',
//   messagingSenderId: '598469881075',
//   appId: '1:598469881075:web:1a3afa08cbe1b9a3131b86',
// };

// Testing
// const firebaseConfig = {
//   apiKey: 'AIzaSyA-Sq8FRvuOcJPsv6zTaPtA_djx5Okre40',
//   authDomain: 'react-cursos-dev-e0be8.firebaseapp.com',
//   projectId: 'react-cursos-dev-e0be8',
//   storageBucket: 'react-cursos-dev-e0be8.appspot.com',
//   messagingSenderId: '160728593785',
//   appId: '1:160728593785:web:ac36198f32bac5361d6ba8',
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
