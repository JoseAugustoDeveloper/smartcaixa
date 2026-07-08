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

export async function imprimirCupom() {
  const conteudo = document.getElementById("cupom-impressao").innerHTML;

  const janela = window.open("", "", "width=350,height=700");

  janela.document.write(`
    <html>
      <head>
        <title>Cupom</title>
      </head>

      <body>
        ${conteudo}
      </body>
    </html>
  `);

  janela.document.close();
  janela.focus();
  janela.print();
  janela.close();
}