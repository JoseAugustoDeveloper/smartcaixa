function moeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function RelatorioA4({ valores, resumo }) {
  return (
    <div
      id="relatorio-pdf"
      style={{
        background: "#fff",
        color: "#000",
        padding: "40px",
        width: "210mm",
        minHeight: "297mm",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        SMARTCAIXA
      </h1>

      <h2>Fechamento de Caixa</h2>

      <hr />

      {valores.maquinas.map((maq) => (
        <div key={maq.id} style={{ marginBottom: 30 }}>
          <h3>{maq.nome}</h3>

          <table width="100%">
            <tbody>

              <tr>
                <td>Visa Débito</td>
                <td align="right">{moeda(maq.visaDebito)}</td>
              </tr>

              <tr>
                <td>Visa Crédito</td>
                <td align="right">{moeda(maq.visaCredito)}</td>
              </tr>

              <tr>
                <td>Master Débito</td>
                <td align="right">{moeda(maq.masterDebito)}</td>
              </tr>

              <tr>
                <td>Master Crédito</td>
                <td align="right">{moeda(maq.masterCredito)}</td>
              </tr>

              <tr>
                <td>Elo Débito</td>
                <td align="right">{moeda(maq.eloDebito)}</td>
              </tr>

              <tr>
                <td>Elo Crédito</td>
                <td align="right">{moeda(maq.eloCredito)}</td>
              </tr>

              <tr>
                <td>Amex</td>
                <td align="right">{moeda(maq.amex)}</td>
              </tr>

              <tr>
                <td>PIX</td>
                <td align="right">{moeda(maq.pix)}</td>
              </tr>

            </tbody>
          </table>

          <hr />
        </div>
      ))}

      <h2>Movimentação</h2>

      <table width="100%">
        <tbody>

          <tr>
            <td>Transferências</td>
            <td align="right">{moeda(valores.movimentacao.transferencias)}</td>
          </tr>

          <tr>
            <td>Sangrias</td>
            <td align="right">{moeda(valores.movimentacao.sangrias)}</td>
          </tr>

          <tr>
            <td>Despesas</td>
            <td align="right">{moeda(valores.movimentacao.despesas)}</td>
          </tr>

          <tr>
            <td>Vales</td>
            <td align="right">{moeda(valores.movimentacao.vales)}</td>
          </tr>

        </tbody>
      </table>

      <hr />

      <h2>Resumo</h2>

      <table width="100%">
        <tbody>

          <tr>
            <td>Total Débito</td>
            <td align="right">{moeda(resumo.totalDebito)}</td>
          </tr>

          <tr>
            <td>Total Crédito</td>
            <td align="right">{moeda(resumo.totalCredito)}</td>
          </tr>

          <tr>
            <td>Total Entradas</td>
            <td align="right">{moeda(resumo.entradas)}</td>
          </tr>

          <tr>
            <td>Total Saídas</td>
            <td align="right">{moeda(resumo.saidas)}</td>
          </tr>

          <tr>
            <td><strong>Resultado</strong></td>
            <td align="right">
              <strong>{moeda(resumo.diferenca)}</strong>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default RelatorioA4;