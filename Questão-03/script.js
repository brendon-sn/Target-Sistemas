async function fetchFaturamento() {
    try {
        const response = await fetch('faturamento.json');
        const data = await response.json();
        
        const diasComFaturamento = data.filter(item => item.faturamento > 0);

        if (diasComFaturamento.length === 0) {
            throw new Error('Não há dados de faturamento válidos.');
        }

        const valoresFaturamento = diasComFaturamento.map(item => item.faturamento);
        const menorFaturamento = Math.min(...valoresFaturamento);
        const maiorFaturamento = Math.max(...valoresFaturamento);

        const somaFaturamento = valoresFaturamento.reduce((acc, val) => acc + val, 0);
        const mediaMensal = somaFaturamento / diasComFaturamento.length;

        const diasAcimaMedia = diasComFaturamento.filter(item => item.faturamento > mediaMensal).length;

        document.getElementById('result').innerHTML = `
            <p>Menor valor de faturamento: R$${menorFaturamento.toFixed(2)}</p>
            <p>Maior valor de faturamento: R$${maiorFaturamento.toFixed(2)}</p>
            <p>Número de dias com faturamento acima da média: ${diasAcimaMedia}</p>
        `;
    } catch (error) {
        console.error('Erro ao processar os dados:', error);
        document.getElementById('result').innerText = 'Erro ao carregar ou processar os dados.';
    }
}
fetchFaturamento();