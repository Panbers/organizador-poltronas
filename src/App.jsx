import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  setDoc,
  doc
} from "firebase/firestore";

function App() {
  const totalPoltronas = 40;
  const [poltronas, setPoltronas] = useState(Array(totalPoltronas).fill(false));

  const colecao = collection(db, "poltronas");

  useEffect(() => {
    const unsub = onSnapshot(colecao, (snapshot) => {
      const novaLista = Array(totalPoltronas).fill(false);
      snapshot.forEach((doc) => {
        const i = parseInt(doc.id);
        novaLista[i] = doc.data().vendida;
      });
      setPoltronas(novaLista);
    });

    return () => unsub();
  }, []);

  const alternarStatus = async (index) => {
    const novaLista = [...poltronas];
    novaLista[index] = !novaLista[index];
    setPoltronas(novaLista);

    await setDoc(doc(db, "poltronas", index.toString()), {
      vendida: novaLista[index],
    });
  };

  return (
    <div className="container">
      <h1>Organizador de Poltronas</h1>
      <div className="grid">
        {poltronas.map((vendida, index) => (
          <button
            key={index}
            className={`poltrona ${vendida ? "vendida" : ""}`}
            onClick={() => alternarStatus(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
