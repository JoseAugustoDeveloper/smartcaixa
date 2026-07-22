import { useState, useEffect } from "react";

import { calcularResumo } from "../services/calculos";
import { salvarCaixa, carregarCaixa } from "../services/storage";

import Resumo from "../components/Resumo";
import Section from "../components/Section";
import Header from "../components/Header";
import TabelaCartoes from "../components/TabelaCartoes";
import Toolbar from "../components/Toolbar";

import { outrosValores, saidas } from "../data/campos";

import MainLayout from "../layout/MainLayout";

import RelatorioA4 from "../components/relatorios/RelatorioA4";
import RelatorioCupom from "../components/relatorios/RelatorioCupom";

import { gerarPDF, imprimirCupom, gerarCupomPDF } from "../services/pdf";

import useMobile from "../hooks/useMobile";
import TabelaCartoesMobile from "../components/TabelaCartoesMobile";

const estadoInicial = {
  maquinas: [
    {
      id: 1,
      nome: "Máquina 1",

      EloDebito: "",
      EloCredito: "",

      MasterDebito: "",
      MasterCredito: "",

      VisaDebito: "",
      VisaCredito: "",

      amex: "",

      pix: "",
    },
  ],

  movimentacao: {
    notas: "",
    transferencias: "",
    pixSicoob: "",
    punto: "",
    valeCard: "",
    bamex: "",
    desconto: "",
    despesas: "",
    vales: "",
    credito: "",
    sangrias: "",
  },

  saidas: {
    produtos: "",
    combustivel: "",
    creditos: "",
  },
};

function Caixa() {
  const [valores, setValores] = useState(() => {
    return carregarCaixa() || estadoInicial;
  });

  const isMobile = useMobile();

  async function gerarRelatorio() {
    await gerarPDF("relatorio-pdf");
  }

  async function gerarCupom() {
    await gerarCupomPDF("relatorio-cupom");
  }

  function alterarMovimentacao(nome, valor) {
    setValores((old) => ({
      ...old,

      movimentacao: {
        ...old.movimentacao,

        [nome]: valor,
      },
    }));
  }
  function alterarSaidas(nome, valor) {
    setValores((old) => ({
      ...old,

      saidas: {
        ...old.saidas,

        [nome]: valor,
      },
    }));
  }
  function alterarCartao(id, campo, valor) {
    setValores((old) => ({
      ...old,

      maquinas: old.maquinas.map((maq) =>
        maq.id === id
          ? {
              ...maq,

              [campo]: valor,
            }
          : maq,
      ),
    }));
  }
  function adicionarMaquina() {
    setValores((old) => ({
      ...old,

      maquinas: [
        ...old.maquinas,

        {
          id: Date.now(),

          nome: `Máquina ${old.maquinas.length + 1}`,

          EloDebito: "",
          EloCredito: "",

          masterDebito: "",
          masterCredito: "",

          VisaDebito: "",
          VisaCredito: "",

          amex: "",

          pix: "",
        },
      ],
    }));
  }
  function removerMaquina(id) {
    if (valores.maquinas.length === 1) return;

    setValores((old) => ({
      ...old,

      maquinas: old.maquinas.filter((m) => m.id !== id),
    }));
  }
  function alterarNomeMaquina(id, nome) {
    setValores((old) => ({
      ...old,

      maquinas: old.maquinas.map((m) =>
        m.id === id
          ? {
              ...m,

              nome,
            }
          : m,
      ),
    }));
  }
  async function imprimir() {
    await gerarCupomPDF(valores);
  }

  const resumo = calcularResumo(valores);
  useEffect(() => {
    salvarCaixa(valores);
  }, [valores]);
  return (
    <MainLayout>
      <div className="container">
        <Header />

        <Toolbar onGerarPDF={gerarRelatorio} onCupom={imprimir} />

        <div className="grid">
          {isMobile ? (
            <TabelaCartoesMobile
              maquinas={valores.maquinas}
              alterarCartao={alterarCartao}
              alterarNomeMaquina={alterarNomeMaquina}
            />
          ) : (
            <TabelaCartoes
              maquinas={valores.maquinas}
              alterarCartao={alterarCartao}
              adicionarMaquina={adicionarMaquina}
              removerMaquina={removerMaquina}
              alterarNomeMaquina={alterarNomeMaquina}
            />
          )}
          <Section
            titulo="Movimentação"
            campos={outrosValores}
            valores={valores.movimentacao}
            alterarCampo={alterarMovimentacao}
          />
        </div>
        <Section
          titulo="Saídas"
          campos={saidas}
          valores={valores.saidas}
          alterarCampo={alterarSaidas}
        />
        <Resumo resumo={resumo} valores={valores} alterarCampo={() => {}} />
      </div>

      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
        }}
      >
        <RelatorioA4 valores={valores} resumo={resumo} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
        }}
      >
        <RelatorioCupom valores={valores} resumo={resumo} />
      </div>
    </MainLayout>
  );
}

export default Caixa;
