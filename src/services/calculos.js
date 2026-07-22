function numero(valor) {
  return Number(valor || 0);
}

export function calcularResumo(valores) {
  const maquinas = valores.maquinas || [];

  // Débito
  const totalDebito = maquinas.reduce(
    (total, maq) =>
      total +
      numero(maq.EloDebito) +
      numero(maq.MasterDebito) +
      numero(maq.VisaDebito),
    0
  );

  // Crédito
  const totalCredito = maquinas.reduce(
    (total, maq) =>
      total +
      numero(maq.EloCredito) +
      numero(maq.MasterCredito) +
      numero(maq.VisaCredito) +
      numero(maq.amex),
    0
  );

  // PIX
  const totalPix = maquinas.reduce(
    (total, maq) => total + numero(maq.pix),
    0
  );

  const mov = valores.movimentacao || {};

  const notas = numero(mov.notas);
  const transferencias = numero(mov.transferencias);
  const pixSicoob = numero(mov.pixSicoob);
  const punto = numero(mov.punto);
  const valeCard = numero(mov.valeCard);
  const bamex = numero(mov.bamex);
  const desconto = numero(mov.desconto);
  const despesas = numero(mov.despesas);
  const vales = numero(mov.vales);
  const credito = numero(mov.credito);
  const sangrias = numero(mov.sangrias);

  // Entradas
 const entradas =
  totalDebito +
  totalCredito +
  totalPix +
  notas +
  transferencias +
  pixSicoob +
  punto +
  valeCard +
  bamex +
  desconto +
  despesas +
  vales +
  credito +
  sangrias;

  // Saídas
  const saidasObj = valores.saidas || {};

  const produtos = numero(saidasObj.produtos);
  const combustivel = numero(saidasObj.combustivel);
  const creditos = numero(saidasObj.creditos);

  const saidas =
    produtos +
    combustivel +
    creditos;

  const diferenca = entradas - saidas;

  let resultado = "Caixa Fechado";

  if (diferenca > 0) resultado = "Sobra";
  if (diferenca < 0) resultado = "Falta";

  return {
    totalDebito,
    totalCredito,
    totalPix,

    notas,
    transferencias,
    pixSicoob,
    punto,
    valeCard,
    bamex,
    desconto,
    despesas,
    vales,
    credito,
    sangrias,

    entradas,

    produtos,
    combustivel,
    creditos,

    saidas,

    diferenca,
    resultado,
  };
}