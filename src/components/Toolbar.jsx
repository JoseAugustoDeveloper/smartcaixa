function Toolbar({
  onGerarPDF,
  onNovo,
  onSalvar,
  onCupom,
  onHistorico,
}) {
  return (
    <div className="toolbar">

      <button
        className="btn salvar"
        onClick={onSalvar}
      >
        💾 Salvar
      </button>

      <button
        className="btn novo"
        onClick={onNovo}
      >
        🆕 Novo
      </button>

      <button
        className="btn pdf"
        onClick={onGerarPDF}
      >
        📄 Gerar PDF
      </button>

      <button
        className="btn cupom"
        onClick={onCupom}
      >
        🧾 Cupom
      </button>

      <button
        className="btn historico"
        onClick={onHistorico}
      >
        📂 Histórico
      </button>

    </div>
  );
}

export default Toolbar;