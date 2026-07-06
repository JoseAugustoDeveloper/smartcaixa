function numero(valor) {
    return Number(valor || 0);
}

export function calcularResumo(valores) {

    const maquinas = valores.maquinas || [];

    // Totais dos cartões
    const totalDebito = maquinas.reduce((total, maq) => {

        return total +

            numero(maq.visaDebito) +
            numero(maq.masterDebito) +
            numero(maq.eloDebito);

    }, 0);

    const totalCredito = maquinas.reduce((total, maq) => {

        return total +

            numero(maq.visaCredito) +
            numero(maq.masterCredito) +
            numero(maq.eloCredito) +
            numero(maq.amex);

    }, 0);

    const totalPix = maquinas.reduce((total, maq) => {

        return total + numero(maq.pix);

    }, 0);

    // Outros valores
    const movimentacao = valores.movimentacao || {};

    const transferencias = numero(movimentacao.transferencias);

    const credito = numero(movimentacao.credito);

    const sangrias = numero(movimentacao.sangrias);

    const despesas = numero(movimentacao.despesas);

    const vales = numero(movimentacao.vales);

    // Entradas
    const entradas =
        totalDebito +
        totalCredito +
        totalPix +
        transferencias +
        credito +
        despesas +
        vales;

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

    if (diferenca > 0)
        resultado = "Sobra";

    if (diferenca < 0)
        resultado = "Falta";

    return {

        totalDebito,

        totalCredito,

        totalPix,

        transferencias,

        credito,

        sangrias,

        despesas,

        vales,

        entradas,

        produtos,

        combustivel,

        creditos,

        saidas,

        diferenca,

        resultado

    };

}