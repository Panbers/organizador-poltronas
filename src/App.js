import { useState } from 'react'
import { supabase } from './supabase'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [logado, setLogado] = useState(false)

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha
    })

    if (!error) setLogado(true)
  }

  if (!logado) {
    return (
      <div>
        <h2>Admin</h2>
        <input placeholder="email" onChange={e => setEmail(e.target.value)} />
        <input placeholder="senha" type="password" onChange={e => setSenha(e.target.value)} />
        <button onClick={login}>Entrar</button>
      </div>
    )
  }

  return <Dashboard />
}