const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const valorTotal = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

const resultDiv = document.getElementById('result');
for (let estado in faturamento) {
    const percentual = (faturamento[estado] / valorTotal) * 100;
    resultDiv.innerHTML += `<p>${estado}: ${percentual.toFixed(2)}%</p>`;
}