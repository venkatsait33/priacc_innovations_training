const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = '';

// Click events for on-screen buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value) {
            currentInput += value;
            updateDisplay();
        }
    });
});

clearBtn.addEventListener('click', clearDisplay);
equalsBtn.addEventListener('click', calculate);

// ===== Keyboard Support =====
document.addEventListener('keydown', (e) => {
    const allowedKeys = '0123456789+-*/.';
    if (allowedKeys.includes(e.key)) {
        currentInput += e.key;
        updateDisplay();
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault(); 
        calculate();
    } else if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    } else if (e.key.toLowerCase() === 'c') {
        clearDisplay();
    }
});

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}