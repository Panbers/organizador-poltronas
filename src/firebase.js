import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtXxZOe9bAwHCvq6wQb5FAVAxDlU5C9H0",
  authDomain: "organizadorpoltronas.firebaseapp.com",
  databaseURL: "https://organizadorpoltronas-default-rtdb.firebaseio.com",
  projectId: "organizadorpoltronas",
  storageBucket: "organizadorpoltronas.firebasestorage.app",
  messagingSenderId: "471852527829",
  appId: "1:471852527829:web:2657b1cb98bee0f0cd725c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
