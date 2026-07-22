import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function gerarPDF(idElemento, nomeArquivo = "fechamento-caixa.pdf") {
  const elemento = document.getElementById(idElemento);

  if (!elemento) {
    alert("Relatório não encontrado.");
    return;
  }

  const canvas = await html2canvas(elemento, {
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const larguraPdf = 210;
  const alturaPdf = (canvas.height * larguraPdf) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, larguraPdf, alturaPdf);

  pdf.save(nomeArquivo);
}

// export async function imprimirCupom() {
//   const conteudo = document.getElementById("cupom-impressao").innerHTML;

//   const janela = window.open("", "", "width=350,height=700");

//   janela.document.write(`
//     <html>
//       <head>
//         <title>Cupom</title>
//       </head>

//       <body>
//         ${conteudo}
//       </body>
//     </html>
//   `);

//   janela.document.close();
//   janela.focus();
//   janela.print();
//   janela.close();
// }

// export async function gerarCupomPDF(
//   idElemento,
//   nomeArquivo = "cupom-fechamento.pdf"
// ) {

//   const elemento = document.getElementById(idElemento);

//   if (!elemento) {
//     alert("Cupom não encontrado.");
//     return;
//   }

//   const canvas = await html2canvas(elemento, {
//     scale: 2,
//     useCORS: true
//   });

//   const imgData = canvas.toDataURL("image/png");


//   // altura proporcional
//   const largura = 120;

//   const altura =
//     (canvas.height * largura) / canvas.width;

//   const pdf = new jsPDF({
//     orientation: "portrait",
//     unit: "mm",
//     format: [largura, altura]
//   });

//   pdf.addImage(
//     imgData,
//     "PNG",
//     0,
//     0,
//     largura,
//     altura
//   );

//   pdf.save(nomeArquivo);
// }

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function numero(valor) {
  return Number(valor || 0);
}

function moeda(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function escreverLinha(pdf, y, nome, valor) {
  if (numero(valor) === 0) return y;

  const data = new Date().toLocaleDateString("pt-BR");

  pdf.setFont("courier", "normal");
  pdf.setFontSize(9);

  pdf.text(nome, 5, y);

  pdf.text(data, 42, y);

  pdf.text(moeda(numero(valor)), 75, y, {
    align: "right",
  });

  return y + 5;
}

export async function gerarCupomPDF(valores) {

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: [80, 220]
  });

  let y = 8;

  const maquinas = valores.maquinas;

  const soma = (campo) =>
    maquinas.reduce(
      (total, maq) => total + numero(maq[campo]),
      0
    );

  y = escreverLinha(pdf, y, "ELO DÉBITO", soma("eloDebito"));

  y = escreverLinha(pdf, y, "MASTER DÉBITO", soma("masterDebito"));

  y = escreverLinha(pdf, y, "VISA DÉBITO", soma("visaDebito"));

  y = escreverLinha(pdf, y, "ELO CRÉDITO", soma("eloCredito"));

  y = escreverLinha(pdf, y, "MASTER CRÉDITO", soma("masterCredito"));

  y = escreverLinha(pdf, y, "VISA CRÉDITO", soma("visaCredito"));

  y = escreverLinha(pdf, y, "AMEX", soma("amex"));

  y = escreverLinha(pdf, y, "PIX", soma("pix"));

  y += 3;}