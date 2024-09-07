// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGToGAqPKPemZKeSQ99hGOl0DWFHskSaQ",
  authDomain: "tivoralandingpage.firebaseapp.com",
  databaseURL: "https://tivoralandingpage-default-rtdb.firebaseio.com/",
  projectId: "tivoralandingpage",
  storageBucket: "tivoralandingpage.appspot.com",
  messagingSenderId: "586481298802",
  appId: "1:586481298802:web:10deae678f1a0a444241eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
