import InputMoney from "./InputMoney";

function TabelaCartoesMobile({
  maquinas,
  alterarCartao,
  alterarNomeMaquina,
}) {
  return (
    <div className="cards-maquinas">
      {maquinas.map((maq) => (
        <div className="card-maquina" key={maq.id}>
          <input
            className="titulo-maquina"
            value={maq.nome}
            onChange={(e) =>
              alterarNomeMaquina(maq.id, e.target.value)
            }
          />

          <InputMoney
            label="Elo Débito"
            name="eloDebito"
            values={maq}
            onChange={(campo, valor) =>
              alterarCartao(maq.id, campo, valor)
            }
          />

          <InputMoney
            label="Master Débito"
            name="masterDebito"
            values={maq}
            onChange={(campo, valor) =>
              alterarCartao(maq.id, campo, valor)
            }
          />

          <InputMoney
            label="Visa Débito"
            name="visaDebito"
            values={maq}
            onChange={(campo, valor) =>
              alterarCartao(maq.id, campo, valor)
            }
          />

          <InputMoney
            label="Elo Crédito"
            name="eloCredito"
            values={maq}
            onChange={(campo, valor) =>
              alterarCartao(maq.id, campo, valor)
            }
          />

          <InputMoney
            label="Master Crédito"
            name="masterCredito"
            values={maq}
            onChange={(campo, valor) =>
              alterarCartao(maq.id, campo, valor)
            }
          />

          <InputMoney
            label="Visa Crédito"
            name="visaCredito"
            values={maq}
            onChange={(campo, valor) =>
              alterarCartao(maq.id, campo, valor)
            }
          />

          <InputMoney
            label="Amex"
            name="amex"
            values={maq}
            onChange={(campo, valor) =>
              alterarCartao(maq.id, campo, valor)
            }
          />

          <InputMoney
            label="Pix"
            name="pix"
            values={maq}
            onChange={(campo, valor) =>
              alterarCartao(maq.id, campo, valor)
            }
          />
        </div>
      ))}
    </div>
  );
}

export default TabelaCartoesMobile;