import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState('');

    // Update the display text
    const updateDisplay = (value) => {
        setCurrentInput(value);
    };

    // Handle on-screen button click
    const handleButtonClick = (value) => {
        setCurrentInput((prev) => prev + value);
    };

    // Clear display
    const clearDisplay = () => {
        setCurrentInput('');
    };

    // Calculate the result
    const calculate = () => {
        try {
            // Using Function instead of eval for safer evaluation
            const result = Function(`"use strict";return (${currentInput})`)();
            setCurrentInput(result.toString());
        } catch {
            setCurrentInput('Error');
            setTimeout(() => setCurrentInput(''), 1200);
        }
    };

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            const allowedKeys = '0123456789+-*/.';
            if (allowedKeys.includes(e.key)) {
                setCurrentInput((prev) => prev + e.key);
            } else if (e.key === 'Enter' || e.key === '=') {
                e.preventDefault();
                calculate();
            } else if (e.key === 'Backspace') {
                setCurrentInput((prev) => prev.slice(0, -1));
            } else if (e.key.toLowerCase() === 'c') {
                clearDisplay();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentInput]);

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-72">
                <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Calculator</h1>

                {/* Display */}
                <div
                    className="bg-gray-200 h-16 mb-4 rounded-lg flex items-center justify-end px-4 text-2xl font-mono text-gray-900 overflow-x-auto"
                >
                    {currentInput || '0'}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-4 gap-3">
                    {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', 'C', '+'].map((btn) => {
                        const isOperator = ['/', '*', '-', '+'].includes(btn);
                        const isClear = btn === 'C';
                        return (
                            <button
                                key={btn}
                                className={`btn ${isOperator ? 'bg-orange-500 text-white' :
                                        isClear ? 'bg-red-500 text-white' : ''
                                    }`}
                                onClick={() =>
                                    btn === 'C' ? clearDisplay() : handleButtonClick(btn)
                                }
                            >
                                {btn === '/' ? '÷' : btn === '*' ? '×' : btn}
                            </button>
                        );
                    })}
                    <button
                        className="col-span-4 btn bg-green-500 text-white"
                        onClick={calculate}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
