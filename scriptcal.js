function clearResult() {
    document.getElementById('result').value = '';
}
function anum(number) {
    document.getElementById('result').value += number;
}
function apo(operator) {
    const currentResult = document.getElementById('result').value;
    const lastChar = currentResult.charAt(currentResult.length - 1);

    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
        document.getElementById('result').value += operator;
    }
}
function adot() {
    const currentResult = document.getElementById('result').value;
    const lastChar = currentResult.charAt(currentResult.length - 1);

    if (!currentResult.includes('.') && !isNaN(lastChar)) {
        document.getElementById('result').value += '.';
    }
}
function calresult() {
    const currentResult = document.getElementById('result').value;

    try {
        const result = eval(currentResult);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

