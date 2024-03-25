// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrOZAzNLyfPb9q5LEMJYU0XeZTi_boqbE",
  authDomain: "netflixgpt-2aaca.firebaseapp.com",
  projectId: "netflixgpt-2aaca",
  storageBucket: "netflixgpt-2aaca.appspot.com",
  messagingSenderId: "994587573240",
  appId: "1:994587573240:web:afbe493fa55863892fb40d",
  measurementId: "G-0QHR3YSCSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()