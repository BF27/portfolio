// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fbdev-portfolio.firebaseapp.com",
  projectId: "fbdev-portfolio",
  storageBucket: "fbdev-portfolio.appspot.com",
  messagingSenderId: "728257527401",
  appId: "1:728257527401:web:511dc5af09266bb02dacf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);