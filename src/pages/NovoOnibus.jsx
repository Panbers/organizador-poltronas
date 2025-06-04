import { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function NovoOnibus() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const criar = async () => {
    if (!nome) return alert("Digite um nome");

    const id = uuidv4().slice(0, 6);
    await setDoc(doc(db, "onibus", id), {
      nome,
      criadoEm: Date.now(),
    });

    navigate(`/organizador/${id}`);
  };

  return (
    <div className="container">
      <h1>Criar Novo Ônibus</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do ônibus"
      />
      <button onClick={criar}>Criar</button>
    </div>
  );
}

export default NovoOnibus;
