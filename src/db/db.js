import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEzX90TMug2H0rbqjQHceifMd7xq8cyE4",
  authDomain: "reactcoderhouse-c2334.firebaseapp.com",
  projectId: "reactcoderhouse-c2334",
  storageBucket: "reactcoderhouse-c2334.appspot.com",
  messagingSenderId: "848994102813",
  appId: "1:848994102813:web:6a5ca2c4eb8730e0ac60f4"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db