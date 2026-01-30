// Array of quiz questions (ARRAY)
const quizData= [
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct: 2
    },
    {
        question: "Which HTML tag is used for CSS?",
        options: ["<css>", "<style>", "<script>", "<link>"],
        correct: 1
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "/* */"],
        correct: 1
    },
    {
        question: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database", "OS"],
        answer: 1
    },
    {
        question: "Which loop is used to repeat code?",
        options: ["if", "switch", "for", "break"],
        answer: 2
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["int", "var", "string", "define"],
        answer: 1
    },
    {
        question: "Which symbol is used for single-line comments?",
        options: ["<!-- -->", "//", "/* */", "#"],
        answer: 1
    },
    {
        question: "Which data type stores true or false?",
        options: ["String", "Number", "Boolean", "Object"],
        answer: 2
    },
    {
        question: "Which operator is used for equality?",
        options: ["=", "==", "!=", "++"],
        answer: 1
    },
    {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "if"],
        answer: 2
    }
];

let currentQuestion = 1;
let score = 1;

// Load question using LOOP
function loadQuestion() {
    let q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let buttons = document.getElementsByClassName("option");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = q.options[i];
    }
}

loadQuestion();

// Check answer using CONDITIONAL STATEMENTS
function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        score++;
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
    }
}

// Move to next question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").innerText =
            "Quiz Finished! Your Score: " + score + "/" + quizData.length;
    }
}