async function faturamento() {
    try {
        const response = await fetch('faturamento.json');
        const dados = await response.json();

        const diasComFaturamento = dados.filter(dia => dia.valor > 0);

        const menorValor = diasComFaturamento.reduce((min, dia) => dia.valor < min ? dia.valor : min, diasComFaturamento[0].valor);
        const maiorValor = diasComFaturamento.reduce((max, dia) => dia.valor > max ? dia.valor : max, diasComFaturamento[0].valor);

        const mediaMensal = calcularMedia(diasComFaturamento);

        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

        exibirResultados(menorValor, maiorValor, diasAcimaDaMedia, mediaMensal);
    } catch (error) {
        console.error('Erro ao carregar ou processar o arquivo JSON:', error);
    }
}

function calcularMedia(diasComFaturamento) {
    const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
    return somaFaturamento / diasComFaturamento.length;
}

function exibirResultados(menorValor, maiorValor, diasAcimaDaMedia, mediaMensal) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Menor valor de faturamento:</strong> R$ ${menorValor.toFixed(2)}</p>
        <p><strong>Maior valor de faturamento:</strong> R$ ${maiorValor.toFixed(2)}</p>
        <p><strong>Média de faturamento mensal:</strong> R$ ${mediaMensal.toFixed(2)}</p>
        <p><strong>Número de dias com faturamento acima da média mensal:</strong> ${diasAcimaDaMedia}</p>
    `;
}

document.addEventListener('DOMContentLoaded', faturamento);
