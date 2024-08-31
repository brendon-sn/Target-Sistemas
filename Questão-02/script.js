function isFibonacci(num) {
    if (num < 0) return false;
    let a = 0;
    let b = 1;
    while (a <= num) {
        if (a === num) {
            return true;
        }
        let next = a + b;
        a = b;
        b = next;
    }
    return false;
}

function checkFibonacci() {
    const input = document.getElementById('inputNumber').value;
    const num = parseInt(input, 10);
    
    if (isNaN(num)) {
        document.getElementById('result').innerText = 'Por favor, insira um número válido.';
        return;
    }
  
    const message = isFibonacci(num) ? 
        `${num} pertence à sequência de Fibonacci.` : 
        `${num} não pertence à sequência de Fibonacci.`;

    document.getElementById('result').innerText = message;
}