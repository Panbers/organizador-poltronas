// src/pages/Dashboard.jsx
import React from "react";
import "../App.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>Você está logado!</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
