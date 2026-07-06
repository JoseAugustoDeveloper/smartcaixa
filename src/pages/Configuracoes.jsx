import { useState } from "react";
import MainLayout from "../layout/MainLayout";
function Configuracoes() {
  const [maquinas, setMaquinas] = useState(["Máquina 1"]);

  function adicionar() {
    setMaquinas([...maquinas, `Máquina ${maquinas.length + 1}`]);
  }

  function alterar(index, valor) {
    const copia = [...maquinas];

    copia[index] = valor;

    setMaquinas(copia);
  }

  function remover(index) {
    if (maquinas.length === 1) return;

    const copia = maquinas.filter((_, i) => i !== index);

    setMaquinas(copia);
  }

  return (
    <MainLayout>
    <div className="container">
      <div className="card">
        <h2>Configurações</h2>

        <h3>Máquinas</h3>

        {maquinas.map((nome, index) => (
          <div className="linha" key={index}>
            <input
              value={nome}
              onChange={(e) => alterar(index, e.target.value)}
            />

            <button className="btn-remover" onClick={() => remover(index)}>
              Remover
            </button>
          </div>
        ))}

        <button className="btn salvar" onClick={adicionar}>
          + Adicionar Máquina
        </button>
      </div>
    </div>
    </MainLayout>
  );
}

export default Configuracoes;
