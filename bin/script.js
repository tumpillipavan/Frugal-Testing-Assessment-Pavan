// Data Store
const QUESTIONS_DB = [
    // Java Questions
    { id: 1, category: 'Java', difficulty: 'Easy', text: 'What is the size of int in Java?', options: ['16 bit', '32 bit', '64 bit', '8 bit'], correct: '32 bit' },
    { id: 2, category: 'Java', difficulty: 'Easy', text: 'Which keyword is used to define a class?', options: ['class', 'Class', 'struct', 'define'], correct: 'class' },
    { id: 3, category: 'Java', difficulty: 'Medium', text: 'What is the default value of a boolean variable?', options: ['true', 'false', 'null', '0'], correct: 'false' },
    { id: 4, category: 'Java', difficulty: 'Hard', text: 'Which collection class allows null keys?', options: ['TreeSet', 'HashMap', 'HashTable', 'PriorityQueue'], correct: 'HashMap' },

    // Python Questions
    { id: 11, category: 'Python', difficulty: 'Easy', text: 'How do you output text in Python?', options: ['System.out.println()', 'console.log()', 'print()', 'echo'], correct: 'print()' },
    { id: 12, category: 'Python', difficulty: 'Medium', text: 'Which is a mutable data type?', options: ['Tuple', 'String', 'List', 'Integer'], correct: 'List' },

    // GK Questions
    { id: 21, category: 'GK', difficulty: 'Easy', text: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct: 'Paris' },
    { id: 22, category: 'GK', difficulty: 'Medium', text: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correct: 'Mars' },
];

/**
 * Main Logic Router
 */
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes('index.html') || path.endsWith('/')) {
        initSetup();
    } else if (path.includes('quiz.html')) {
        initQuiz();
    } else if (path.includes('result.html')) {
        initResult();
    }
});

/**
 * PAGE 1: SETUP
 */
function initSetup() {
    const form = document.getElementById('setup-form');
    // Save to sessionStorage immediately on change if desired, but form submit is cleaner
    if (!form) return;

    // Clear previous session logic
    sessionStorage.removeItem('quizState');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const category = document.getElementById('category').value;
        const difficulty = document.getElementById('difficulty').value;

        // Store specific selections as requested
        sessionStorage.setItem('category', category);
        sessionStorage.setItem('difficulty', difficulty);

        // Filter Questions
        const filteredQuestions = QUESTIONS_DB.filter(q =>
            (q.category === category || category === 'Any') &&
            (q.difficulty === difficulty || difficulty === 'Any')
        ).slice(0, 5);

        if (filteredQuestions.length === 0) {
            alert('No questions found for this selection. Please try Java/Easy or Python/Easy.');
            return;
        }

        const initialState = {
            questions: filteredQuestions,
            currentIndex: 0,
            answers: {}, // { questionId: selectedOptionOrNull }
            timePerQuestion: {}, // { questionId: secondsTaken }
            startTime: Date.now()
        };

        sessionStorage.setItem('quizState', JSON.stringify(initialState));
        window.location.href = 'quiz.html';
    });
}

/**
 * PAGE 2: QUIZ
 */
let quizTimerInterval;
const TIME_LIMIT = 15; // 15 seconds per question

function initQuiz() {
    const state = JSON.parse(sessionStorage.getItem('quizState'));
    if (!state) {
        window.location.href = 'index.html';
        return;
    }

    renderQuestion(state);
    startTimer(state);

    // Event Listeners (Updated IDs)
    document.getElementById('nextBtn').addEventListener('click', () => nextQuestion(state));
    document.getElementById('prevBtn').addEventListener('click', () => prevQuestion(state));
    document.getElementById('submitBtn').addEventListener('click', () => submitQuiz(state));
}

function renderQuestion(state) {
    const question = state.questions[state.currentIndex];
    const total = state.questions.length;
    const current = state.currentIndex + 1;

    // Update UI
    document.getElementById('question-progress').textContent = `Question ${current} of ${total}`;

    // NEW: Upgrade 3 - Smooth Transitions
    const questionContainer = document.querySelector('.question-container');
    if (questionContainer) {
        questionContainer.classList.remove('fade-in-active');
        void questionContainer.offsetWidth; // Trigger reflow to restart animation
        questionContainer.classList.add('fade-in-active');
    }

    document.getElementById('questionText').textContent = question.text;

    // Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;

        // Restore previous selection
        if (state.answers[question.id] === opt) {
            btn.classList.add('selected');
        }

        btn.onclick = () => selectOption(state, question.id, opt, btn);
        optionsContainer.appendChild(btn);
    });

    // Navigation Buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.style.display = state.currentIndex === 0 ? 'none' : 'block';
    if (state.currentIndex === total - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

function selectOption(state, questionId, option, btnElement) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    state.answers[questionId] = option;
    saveState(state);
}

function startTimer(state) {
    let timeLeft = TIME_LIMIT;
    const timerElem = document.getElementById('timerDisplay');

    timerElem.textContent = formatTime(timeLeft);
    const questionId = state.questions[state.currentIndex].id;
    const questionStartTime = Date.now();

    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        timeLeft--;
        timerElem.textContent = formatTime(timeLeft);

        // NEW: Upgrade 2 - Panic Mode
        if (timeLeft <= 5) {
            timerElem.classList.add('warning');
        } else {
            timerElem.classList.remove('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(quizTimerInterval);
            // Record time
            recordTime(state, questionId, TIME_LIMIT);

            // EXPLICIT: Mark as null/unanswered if not answered yet
            if (!state.answers[questionId]) {
                state.answers[questionId] = null;
            }
            saveState(state);

            // Auto move
            if (state.currentIndex < state.questions.length - 1) {
                // Determine if we need to manually trigger next UI update or just call nextQuestion
                // nextQuestion handles render and new timer
                state.currentIndex++;
                saveState(state);
                renderQuestion(state);
                startTimer(state);
            } else {
                submitQuiz(state);
            }
        }
    }, 1000);

    state.currentQuestionStartTime = questionStartTime;
}

function recordTime(state, questionId, limitOverride) {
    const elapsed = limitOverride || Math.floor((Date.now() - state.currentQuestionStartTime) / 1000);
    // Accumulate time if revisited? Or overwrite? 
    // Usually overwrite or accumulate. Simple overwrite for now based on last visit.
    state.timePerQuestion[questionId] = elapsed;
    saveState(state);
}

function nextQuestion(state) {
    recordTime(state, state.questions[state.currentIndex].id);
    state.currentIndex++;
    saveState(state);
    renderQuestion(state);
    startTimer(state);
}

function prevQuestion(state) {
    recordTime(state, state.questions[state.currentIndex].id);
    state.currentIndex--;
    saveState(state);
    renderQuestion(state);
    startTimer(state);
}

function submitQuiz(state) {
    clearInterval(quizTimerInterval);
    recordTime(state, state.questions[state.currentIndex].id);
    window.location.href = 'result.html';
}

function formatTime(sec) {
    return '00:' + (sec < 10 ? '0' : '') + sec;
}

function saveState(state) {
    sessionStorage.setItem('quizState', JSON.stringify(state));
}

/**
 * PAGE 3: RESULT
 */
function initResult() {
    const state = JSON.parse(sessionStorage.getItem('quizState'));
    if (!state) {
        window.location.href = 'index.html';
        return;
    }

    let correctCount = 0;
    const total = state.questions.length;

    state.questions.forEach(q => {
        if (state.answers[q.id] === q.correct) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / total) * 100);

    const scoreElem = document.getElementById('resultScore');
    const correctElem = document.getElementById('totalCorrect');

    // Selenium Verification checks these:
    if (scoreElem) scoreElem.textContent = `${percentage}%`;
    if (correctElem) correctElem.textContent = `${correctCount}/${total}`;

    renderCharts(state, correctCount, total);
}

function renderCharts(state, correct, total) {
    const ctxScore = document.getElementById('scoreChart').getContext('2d');
    const ctxTime = document.getElementById('timeChart').getContext('2d');

    new Chart(ctxScore, {
        type: 'pie',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [correct, total - correct],
                backgroundColor: ['#10b981', '#ef4444']
            }]
        }
    });

    const labels = state.questions.map((_, i) => `Q${i + 1}`);
    const timeData = state.questions.map(q => state.timePerQuestion[q.id] || 0);

    new Chart(ctxTime, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Time (s)',
                data: timeData,
                backgroundColor: '#4f46e5'
            }]
        }
    });
}
