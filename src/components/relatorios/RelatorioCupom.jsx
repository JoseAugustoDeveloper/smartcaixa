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
        fontSize: "7px",
        lineHeight: "10px",
        whiteSpace: "pre",
      }}
    >
      <span style={{ width: "30px" }}>
        {titulo.padEnd(12, ".")}
      </span>

      <span style={{ width: "42px", textAlign: "center" }}>
        {data}
      </span>

      <span
        style={{
          width: "52px",
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
      id="relatorio-cupom"
      style={{
        width: "340px",
        padding: "6px",
        fontFamily: "Courier New, monospace",
      }}
    >
      <Linha titulo="ELO DÉBITO" valor={soma("EloDebito")} />
      <Linha titulo="MASTER DÉBITO" valor={soma("MasterDebito")} />
      <Linha titulo="VISA DÉBITO" valor={soma("VisaDebito")} />

      <Linha titulo="ELO CRÉDITO" valor={soma("EloCredito")} />
      <Linha titulo="MASTER CRÉDITO" valor={soma("MasterCredito")} />
      <Linha titulo="VISA CRÉDITO" valor={soma("VisaCredito")} />

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