function Header() {
  const hoje = new Date().toLocaleDateString("pt-BR");

  return (
    <div className="header">

      <h1>💰 Fechamento de Caixa</h1>

      <div className="header-grid">

        <div>
          <label>Data</label>
          <input type="text" value={hoje} readOnly />
        </div>

        <div>
          <label>Operador</label>
          <input
            type="text"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label>Turno</label>

          <select>

            <option>Manhã</option>

            <option>Tarde</option>

            <option>Noite</option>

          </select>

        </div>

      </div>

    </div>
  );
}

export default Header;