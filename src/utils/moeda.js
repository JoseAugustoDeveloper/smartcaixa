export function formatarMoeda(valor) {
  const numero = Number(valor || 0);

  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

export function limparMoeda(valor) {
  if (!valor) return "";

  // Remove tudo, exceto números, vírgula e ponto
  valor = valor.replace(/[^\d,.-]/g, "");

  // Troca vírgula por ponto
  valor = valor.replace(",", ".");

  return valor;
}