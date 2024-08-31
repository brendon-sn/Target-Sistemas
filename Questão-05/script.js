function invertString() {
    const input = document.getElementById('inputString').value;
    let inverted = '';
    for (let i = input.length - 1; i >= 0; i--) {
        inverted += input[i];
    }
    document.getElementById('result').innerText = `String invertida: ${inverted}`;
}