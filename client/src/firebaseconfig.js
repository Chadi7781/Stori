
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPkdz9uA7CWc1jgv3Bm1nq5fj5Kx6WrVA",
  authDomain: "stori-bf6dc.firebaseapp.com",
  projectId: "stori-bf6dc",
  storageBucket: "stori-bf6dc.appspot.com",
  messagingSenderId: "518832699454",
  appId: "1:518832699454:web:ed87378f9895500341396f",
  measurementId: "G-N9KY9GGQDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export 
export const auth = getAuth(app);

