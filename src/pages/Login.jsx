import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user || userGoogle) {
      // Usuário autenticado, redireciona para dashboard
      navigate("/dashboard");
    }
  }, [user, userGoogle, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div style={{ maxWidth: 320, margin: "auto", padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <button onClick={() => signInWithGoogle()} style={{ marginTop: 10 }}>
        Entrar com Google
      </button>

      {(loading || loadingGoogle) && <p>Carregando...</p>}
      {(error || errorGoogle) && <p style={{ color: "red" }}>Erro: {(error || errorGoogle).message}</p>}
    </div>
  );
}
