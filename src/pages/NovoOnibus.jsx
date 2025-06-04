import React, { useState } from 'react';
import { db } from '../firebase.js';
import { collection, addDoc } from 'firebase/firestore';

export default function NovoOnibus() {
  const [nome, setNome] = useState('');
  const [poltronas, setPoltronas] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !poltronas) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try {
      await addDoc(collection(db, 'onibus'), {
        nome: nome,
        poltronas: Number(poltronas),
        criadoEm: new Date()
      });
      alert('Ônibus criado com sucesso!');
      setNome('');
      setPoltronas('');
    } catch (error) {
      console.error('Erro ao criar ônibus:', error);
      alert('Erro ao criar ônibus. Veja o console.');
    }
  };

  return (
    <div>
      <h2>Criar Novo Ônibus</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do ônibus:</label><br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantidade de poltronas:</label><br />
          <input
            type="number"
            value={poltronas}
            onChange={(e) => setPoltronas(e.target.value)}
            required
            min="1"
          />
        </div>
        <button type="submit">Criar Ônibus</button>
      </form>
    </div>
  );
}
