function Linha({ titulo, valor }) {
  const numero = Number(valor || 0);

  if (numero === 0) return null;

  const data = new Date().toLocaleDateString("pt-BR");

  const valorFormatado = numero.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        display: "flex",
        fontFamily: "Courier New, monospace",
        fontSize: "10px",
        lineHeight: "12px",
        whiteSpace: "pre",
      }}
    >
      <span style={{ width: "95px" }}>
        {titulo.padEnd(12, ".")}
      </span>

      <span style={{ width: "58px", textAlign: "center" }}>
        {data}
      </span>

      <span
        style={{
          width: "75px",
          textAlign: "right",
          fontWeight: "bold",
        }}
      >
        {valorFormatado}
      </span>
    </div>
  );
}

export default function RelatorioCupom({ valores }) {
  const maquinas = valores.maquinas;

  const soma = (campo) =>
    maquinas.reduce(
      (total, maq) => total + Number(maq[campo] || 0),
      0
    );

  return (
    <div
      id="cupom-impressao"
      style={{
        width: "280px",
        padding: "6px",
        fontFamily: "Courier New, monospace",
      }}
    >
      <Linha titulo="ELO DÉBITO" valor={soma("eloDebito")} />
      <Linha titulo="MASTER DÉBITO" valor={soma("masterDebito")} />
      <Linha titulo="VISA DÉBITO" valor={soma("visaDebito")} />

      <Linha titulo="ELO CRÉDITO" valor={soma("eloCredito")} />
      <Linha titulo="MASTER CRÉDITO" valor={soma("masterCredito")} />
      <Linha titulo="VISA CRÉDITO" valor={soma("visaCredito")} />

      <Linha titulo="AMEX" valor={soma("amex")} />
      <Linha titulo="PIX" valor={soma("pix")} />

      <Linha titulo="NOTAS" valor={valores.movimentacao.notas} />
      <Linha titulo="TRANSFERÊNCIA" valor={valores.movimentacao.transferencias} />
      <Linha titulo="PIX SICOOB" valor={valores.movimentacao.pixSicoob} />
      <Linha titulo="PUNTO" valor={valores.movimentacao.punto} />
      <Linha titulo="VALECARD" valor={valores.movimentacao.valeCard} />
      <Linha titulo="BAMEX" valor={valores.movimentacao.bamex} />
      <Linha titulo="DESCONTO" valor={valores.movimentacao.desconto} />
      <Linha titulo="DESPESAS" valor={valores.movimentacao.despesas} />
      <Linha titulo="VALES" valor={valores.movimentacao.vales} />
      <Linha titulo="CRÉDITO" valor={valores.movimentacao.credito} />
    </div>
  );
}