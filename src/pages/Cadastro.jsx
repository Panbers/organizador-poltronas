// src/pages/Cadastro.jsx
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);

  async function handleCadastro(e) {
    e.preventDefault();
    setErro(null);
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Usuário criado com sucesso!");
      setEmail("");
      setSenha("");
    } catch (error) {
      setErro(error.message);
    }
  }

  return (
    <form onSubmit={handleCadastro}>
      <h2>Cadastro</h2>
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
        value={senha}
        onChange={e => setSenha(e.target.value)}
        required
      />
      <button type="submit">Cadastrar</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </form>
  );
}
