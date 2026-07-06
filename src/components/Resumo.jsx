function moeda(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function Resumo({ resumo }) {
  const corResultado =
    resumo.diferenca > 0 ? "sobra" : resumo.diferenca < 0 ? "falta" : "igual";

  return (
    <div className="card">
      <h2>📊 Resumo do Caixa</h2>

      <div className="cards-resumo">
        <div className="item-resumo">
          <span>Total Débito</span>
          <strong>{moeda(resumo.totalDebito)}</strong>
        </div>

        <div className="item-resumo">
          <span>Total Crédito</span>
          <strong>{moeda(resumo.totalCredito)}</strong>
        </div>

        <div className="item-resumo">
          <span>Total PIX</span>

          <strong>{moeda(resumo.totalPix)}</strong>
        </div>

        <div className="item-resumo">
          <span>Total Entradas</span>
          <strong>{moeda(resumo.entradas)}</strong>
        </div>

        <div className="item-resumo">
          <span>Total Saídas</span>
          <strong>{moeda(resumo.saidas)}</strong>
        </div>

        <div className="item-resumo">
          <span>Sangrias</span>
          <strong>{moeda(resumo.sangrias)}</strong>
        </div>
      </div>

      <div className={`resultado ${corResultado}`}>
        {resumo.resultado}

        {resumo.diferenca !== 0 && ` de ${moeda(Math.abs(resumo.diferenca))}`}
      </div>
    </div>
  );
}

export default Resumo;
