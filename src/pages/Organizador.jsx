import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, setDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "../App.css";

function Organizador() {
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

  const alternar = async (i) => {
    const nova = [...poltronas];
    nova[i] = !nova[i];
    setPoltronas(nova);
    await setDoc(doc(db, "onibus", id, "poltronas", i.toString()), {
      vendida: nova[i],
    });
  };

  return (
    <div className="container">
      <h1>Organizador - Ônibus {id}</h1>
      <div className="grid">
        {poltronas.map((v, i) => (
          <button
            key={i}
            className={`poltrona ${v ? "vendida" : ""}`}
            onClick={() => alternar(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Organizador;
