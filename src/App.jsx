import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import Login from "./pages/Login.jsx";
import Organizador from "./pages/Dashboard.jsx"; // ou Dashboard, se for esse o nome

function PrivateRoute({ children }) {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/" />;
}

export default function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Organizador />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
