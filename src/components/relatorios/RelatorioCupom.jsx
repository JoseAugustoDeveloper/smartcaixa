function Bloco({ titulo, valor }) {
  const data = new Date().toLocaleDateString("pt-BR");

  return (
    <div className="bloco-cupom">
      <div className="titulo">{titulo}</div>

      <div className="data">Data: {data}</div>

      <div className="valor">
        R${" "}
        {Number(valor || 0).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}
      </div>

      <div className="espaco"></div>

      <div className="corte">----------------------------------------</div>
    </div>
  );
}

export default function RelatorioCupom({ valores }) {
  const maquinas = valores.maquinas;

  const soma = (campo) =>
    maquinas.reduce((total, maquina) => total + Number(maquina[campo] || 0), 0);

  return (
    <div id="cupom-impressao">
      <Bloco titulo="VISA DÉBITO" valor={soma("visaDebito")} />

      <Bloco titulo="VISA CRÉDITO" valor={soma("visaCredito")} />

      <Bloco titulo="MASTER DÉBITO" valor={soma("masterDebito")} />

      <Bloco titulo="MASTER CRÉDITO" valor={soma("masterCredito")} />

      <Bloco titulo="ELO DÉBITO" valor={soma("eloDebito")} />

      <Bloco titulo="ELO CRÉDITO" valor={soma("eloCredito")} />

      <Bloco titulo="AMEX" valor={soma("amex")} />

      <Bloco titulo="PIX" valor={soma("pix")} />

      <Bloco titulo="PIX SICOOB" valor={valores.movimentacao.pixSicoob} />

      <Bloco titulo="NOTAS" valor={valores.movimentacao.notas} />

      <Bloco titulo="VALECARD" valor={valores.movimentacao.valeCard} />

      <Bloco titulo="PUNTO" valor={valores.movimentacao.punto} />
      
      <Bloco titulo="TRANSFERÊNCIAS" valor={valores.movimentacao.transferencias} />

      <Bloco titulo="CRÉDITO" valor={valores.movimentacao.credito} />

      {/* <Bloco titulo="SANGRIAS" valor={valores.movimentacao.sangrias} /> */}

      <Bloco titulo="DESPESAS" valor={valores.movimentacao.despesas} />

      <Bloco titulo="VALES" valor={valores.movimentacao.vales} />

      {/* <Bloco titulo="PRODUTOS" valor={valores.saidas.produtos} />

      <Bloco titulo="COMBUSTÍVEL" valor={valores.saidas.combustivel} />

      <Bloco titulo="CRÉDITOS" valor={valores.saidas.creditos} /> */}
    </div>
  );
}
