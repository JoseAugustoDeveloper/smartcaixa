import { formatarMoeda } from "../utils/moeda";

const bandeiras = [
  {
    campo: "visaDebito",
    nome: "Visa Débito"
  },
  {
    campo: "visaCredito",
    nome: "Visa Crédito"
  },
  {
    campo: "masterDebito",
    nome: "Master Débito"
  },
  {
    campo: "masterCredito",
    nome: "Master Crédito"
  },
  {
    campo: "eloDebito",
    nome: "Elo Débito"
  },
  {
    campo: "eloCredito",
    nome: "Elo Crédito"
  },
  {
    campo: "amex",
    nome: "Amex"
  },
  {
    campo: "pix",
    nome: "PIX"
  }
];

function TabelaCartoes({
  maquinas,
  alterarCartao,
  adicionarMaquina,
  removerMaquina,
  alterarNomeMaquina
}) {

  function totalLinha(campo) {
    return maquinas.reduce((total, maq) => {
      return total + Number(maq[campo] || 0);
    }, 0);
  }

  return (
    <div className="card">

      <div className="cabecalho-cartoes">

        <h2>Cartões</h2>

        <button
          className="btn salvar"
          onClick={adicionarMaquina}
        >
          + Máquina
        </button>

      </div>

      <table className="tabela-cartoes">

        <thead>

          <tr>

            <th>Bandeira</th>

            {maquinas.map((maq) => (

              <th key={maq.id}>

                <input
                  value={maq.nome}
                  onChange={(e) =>
                    alterarNomeMaquina(
                      maq.id,
                      e.target.value
                    )
                  }
                />

                <button
                  className="btn-remover"
                  onClick={() => removerMaquina(maq.id)}
                >
                  ✖
                </button>

              </th>

            ))}

            <th>Total</th>

          </tr>

        </thead>

        <tbody>

          {bandeiras.map((bandeira) => (

            <tr key={bandeira.campo}>

              <td>{bandeira.nome}</td>

              {maquinas.map((maq) => (

                <td key={maq.id}>

                  <input
                    type="number"
                    value={maq[bandeira.campo]}
                    onChange={(e) =>
                      alterarCartao(
                        maq.id,
                        bandeira.campo,
                        e.target.value
                      )
                    }
                  />

                </td>

              ))}

              <td>

                <strong>

                  {formatarMoeda(
                    totalLinha(bandeira.campo)
                  )}

                </strong>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TabelaCartoes;