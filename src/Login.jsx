import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
   
      //alert("Usuário logado:", result.user);
      console.log("Usuário logado:", result.user);
    } catch (error) {
      //alert("Erro ao logar:", error);
      console.log("Erro ao logar:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={loginGoogle}>Entrar com Google</button>
    </div>
  );
}

export default Login;