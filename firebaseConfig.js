import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvnOftoDSV5sam1JBYKJnDCY-zMRIWobo",
  authDomain: "autenticacao-aula-95125.firebaseapp.com",
  projectId: "autenticacao-aula-95125",
  storageBucket: "autenticacao-aula-95125.firebasestorage.app",
  messagingSenderId: "286845351173",
  appId: "1:286845351173:web:c16874b841d6a81708b36c"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar a Autenticação do Firebase e criar uma referência para gerenciarmos a autenticação (login, logout, estado do usuário)
export const auth = getAuth(app);
