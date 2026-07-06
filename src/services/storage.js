const CHAVE_CAIXA = "smartcaixa_caixa";
const CHAVE_MAQUINAS = "smartcaixa_maquinas";

export function salvarCaixa(dados) {
    localStorage.setItem(CHAVE_CAIXA, JSON.stringify(dados));
}

export function carregarCaixa() {
    const dados = localStorage.getItem(CHAVE_CAIXA);

    return dados ? JSON.parse(dados) : null;
}

export function salvarMaquinas(maquinas) {
    localStorage.setItem(CHAVE_MAQUINAS, JSON.stringify(maquinas));
}

export function carregarMaquinas() {
    const dados = localStorage.getItem(CHAVE_MAQUINAS);

    if (!dados) {
        return [
            {
                id: 1,
                nome: "Máquina 1"
            }
        ];
    }

    return JSON.parse(dados);
}