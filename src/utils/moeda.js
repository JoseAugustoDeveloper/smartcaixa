export function formatarMoeda(valor) {
  const numero = Number(valor) / 100;

  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function limparMoeda(valor) {
  return valor.replace(/\D/g, "");
}