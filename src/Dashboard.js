function Dashboard() {

  const [texto, setTexto] = useState('')
  const [referencia, setReferencia] = useState('')

  const adicionar = async () => {
    await supabase.from('versiculos').insert([
      { texto, referencia, categoria: 'fé' }
    ])
    alert('Adicionado!')
  }

  return (
    <div>
      <h2>Painel Admin</h2>

      <input placeholder="Texto" onChange={e => setTexto(e.target.value)} />
      <input placeholder="Referência" onChange={e => setReferencia(e.target.value)} />

      <button onClick={adicionar}>Adicionar</button>
    </div>
  )
}