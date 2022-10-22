// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhqjawFwCVWmsS4J6ZHixZnXcLJbQWzVU",
  authDomain: "wad2-sgxchange.firebaseapp.com",
  projectId: "wad2-sgxchange",
  storageBucket: "wad2-sgxchange.appspot.com",
  messagingSenderId: "179888934863",
  appId: "1:179888934863:web:ddd1c4274fb93c8becccba",
  measurementId: "G-4WWWED6EYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireStore = getFirestore(app);
const auth = getAuth(app);

export { fireStore, auth, analytics }