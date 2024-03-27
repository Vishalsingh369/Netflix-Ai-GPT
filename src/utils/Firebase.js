// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZlNHdr0R6xGM7-yhfBLXL1aMf4xKHFT0",
  authDomain: "netflix-ai-gpt-dfd5b.firebaseapp.com",
  projectId: "netflix-ai-gpt-dfd5b",
  storageBucket: "netflix-ai-gpt-dfd5b.appspot.com",
  messagingSenderId: "45298932500",
  appId: "1:45298932500:web:b2d5b5ff7f68b25b768001",
  measurementId: "G-WH08FK5LQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);