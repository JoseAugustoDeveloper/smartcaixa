function moeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function RelatorioCupom({ valores, resumo }) {
  return (
    <div
      id="relatorio-cupom"
      style={{
        width: "80mm",
        fontFamily: "monospace",
        fontSize: "12px",
        padding: "10px",
        background: "#fff",
        color: "#000",
      }}
    >
      <center>
        <h2>SMARTCAIXA</h2>
        <p>FECHAMENTO DE CAIXA</p>
      </center>

      <hr />

      <p>{new Date().toLocaleString("pt-BR")}</p>

      <hr />

      {valores.maquinas.map((maq) => (
        <div key={maq.id}>
          <strong>{maq.nome}</strong>

          <p>Visa Débito: {moeda(maq.visaDebito)}</p>
          <p>Visa Crédito: {moeda(maq.visaCredito)}</p>

          <p>Master Débito: {moeda(maq.masterDebito)}</p>
          <p>Master Crédito: {moeda(maq.masterCredito)}</p>

          <p>Elo Débito: {moeda(maq.eloDebito)}</p>
          <p>Elo Crédito: {moeda(maq.eloCredito)}</p>

          <p>Amex: {moeda(maq.amex)}</p>

          <p>PIX: {moeda(maq.pix)}</p>

          <hr />
        </div>
      ))}

      <strong>MOVIMENTAÇÃO</strong>

      <p>Transferências: {moeda(valores.movimentacao.transferencias)}</p>
      <p>Crédito: {moeda(valores.movimentacao.credito)}</p>
      <p>Vales: {moeda(valores.movimentacao.vales)}</p>
      <p>Despesas: {moeda(valores.movimentacao.despesas)}</p>
      <p>Sangrias: {moeda(valores.movimentacao.sangrias)}</p>

      <hr />

      <strong>RESUMO</strong>

      <p>Total Débito: {moeda(resumo.totalDebito)}</p>
      <p>Total Crédito: {moeda(resumo.totalCredito)}</p>
      <p>Entradas: {moeda(resumo.entradas)}</p>
      <p>Saídas: {moeda(resumo.saidas)}</p>

      <hr />

      <center>
        <h3>{resumo.resultado}</h3>
      </center>

      <br />
      <br />

      __________________________

      <center>Operador</center>

      <br />
      <br />

      __________________________

      <center>Conferente</center>
    </div>
  );
}

export default RelatorioCupom;