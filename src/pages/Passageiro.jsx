import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "../App.css";

function Passageiro() {
  const total = 40;
  const [poltronas, setPoltronas] = useState(Array(total).fill(false));
  const { id } = useParams();

  useEffect(() => {
    const ref = collection(db, "onibus", id, "poltronas");
    const unsub = onSnapshot(ref, (snap) => {
      const nova = Array(total).fill(false);
      snap.forEach((doc) => {
        nova[parseInt(doc.id)] = doc.data().vendida;
      });
      setPoltronas(nova);
    });
    return unsub;
  }, [id]);

  return (
    <div className="container">
      <h1>Visualização - Ônibus {id}</h1>
      <div className="grid">
        {poltronas.map((v, i) => (
          <div
            key={i}
            className={`poltrona ${v ? "vendida" : ""}`}
            style={{ cursor: "default" }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Passageiro;
