// Questions Array
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Trainer Marking Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Marketing Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false }
        ]
    },
    {
        question: "Which CSS property changes text color?",
        answers: [
            { text: "font-style", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false },
            { text: "text-decoration", correct: false }
        ]
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        answers: [
            { text: "<javascript>", correct: false },
            { text: "<js>", correct: false },
            { text: "<script>", correct: true },
            { text: "<code>", correct: false }
        ]
    }
];

// DOM Elements
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const quizContainer = document.getElementById("quiz-container");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
    showQuestion();
}

// Display Question
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.className =
            "answer-btn bg-gray-200 hover:bg-gray-300 w-full text-left px-4 py-2 rounded-xl transition";
        answersContainer.appendChild(button);

        button.addEventListener("click", () => selectAnswer(button, answer.correct));
    });
}

// Reset UI for next question
function resetState() {
    nextBtn.classList.add("hidden");
    answersContainer.innerHTML = "";
}

// Handle Answer
function selectAnswer(button, correct) {
    if (correct) {
        score++;
        button.classList.add("bg-green-400");
    } else {
        button.classList.add("bg-red-400");
    }

    // Disable all buttons after selection
    Array.from(answersContainer.children).forEach(btn => {
        btn.disabled = true;
        if (btn !== button && btn.textContent) {
            const ans = questions[currentQuestionIndex].answers.find(a => a.text === btn.textContent);
            if (ans?.correct) btn.classList.add("bg-green-400");
        }
    });

    nextBtn.classList.remove("hidden");
}

// Next Question
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Show Final Score
function showScore() {
    quizContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Restart Quiz
restartBtn.addEventListener("click", startQuiz);

// Initialize
startQuiz();
