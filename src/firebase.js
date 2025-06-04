// Configuração do Firebase e exportação do Firestore e Auth para usar no projeto

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtXxZOe9bAwHCvq6wQb5FAVAxDlU5C9H0",
  authDomain: "organizadorpoltronas.firebaseapp.com",
  databaseURL: "https://organizadorpoltronas-default-rtdb.firebaseio.com",
  projectId: "organizadorpoltronas",
  storageBucket: "organizadorpoltronas.firebasestorage.app",
  messagingSenderId: "471852527829",
  appId: "1:471852527829:web:2657b1cb98bee0f0cd725c"
};


// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Exporta o banco de dados Firestore
const db = getFirestore(app);

// Exporta o sistema de autenticação Firebase
const auth = getAuth(app);

export { db, auth };
