import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar a Autenticação do Firebase e criar uma referência para gerenciarmos a autenticação (login, logout, estado do usuário)
export const auth = getAuth(app);
