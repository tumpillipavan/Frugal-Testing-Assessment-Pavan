
const QUESTIONS_DB = [
    // --- JAVA ---
    // Easy
    { id: 101, category: 'Java', difficulty: 'Easy', text: 'What is the size of int in Java?', options: ['16 bit', '32 bit', '64 bit', '8 bit'], correct: '32 bit' },
    { id: 102, category: 'Java', difficulty: 'Easy', text: 'Which keyword is used to define a class?', options: ['class', 'Class', 'struct', 'define'], correct: 'class' },
    { id: 103, category: 'Java', difficulty: 'Easy', text: 'What is the default value of a boolean variable?', options: ['true', 'false', 'null', '0'], correct: 'false' },
    { id: 104, category: 'Java', difficulty: 'Easy', text: 'Which method is the entry point for a Java program?', options: ['start()', 'main()', 'init()', 'run()'], correct: 'main()' },
    { id: 105, category: 'Java', difficulty: 'Easy', text: 'Which symbol is used for single line comments?', options: ['//', '/*', '#', '--'], correct: '//' },
    { id: 106, category: 'Java', difficulty: 'Easy', text: 'How do you declare an integer variable?', options: ['int x;', 'integer x;', 'num x;', 'x = 1;'], correct: 'int x;' },
    { id: 107, category: 'Java', difficulty: 'Easy', text: 'Which of these is NOT a primitive data type?', options: ['int', 'float', 'boolean', 'String'], correct: 'String' },
    { id: 108, category: 'Java', difficulty: 'Easy', text: 'What is the result of 10 % 3?', options: ['3', '1', '10', '0'], correct: '1' },
    { id: 109, category: 'Java', difficulty: 'Easy', text: 'Which operator is used for comparison?', options: ['=', '==', '<>', '><'], correct: '==' },
    { id: 110, category: 'Java', difficulty: 'Easy', text: 'What keyword represents the current object?', options: ['super', 'this', 'self', 'me'], correct: 'this' },

    // Medium
    { id: 111, category: 'Java', difficulty: 'Medium', text: 'Which collection class allows null keys?', options: ['TreeSet', 'HashMap', 'HashTable', 'PriorityQueue'], correct: 'HashMap' },
    { id: 112, category: 'Java', difficulty: 'Medium', text: 'What is the parent class of all classes in Java?', options: ['Object', 'Class', 'System', 'Main'], correct: 'Object' },
    { id: 113, category: 'Java', difficulty: 'Medium', text: 'Which keyword checks if an object is an instance of a class?', options: ['typeof', 'instanceof', 'is', 'check'], correct: 'instanceof' },
    { id: 114, category: 'Java', difficulty: 'Medium', text: 'What is the default value of an object reference?', options: ['0', 'undefined', 'null', 'false'], correct: 'null' },
    { id: 115, category: 'Java', difficulty: 'Medium', text: 'Which exception is checked?', options: ['NullPointerException', 'ArithmeticException', 'IOException', 'ArrayIndexOutOfBoundsException'], correct: 'IOException' },
    { id: 116, category: 'Java', difficulty: 'Medium', text: 'Which access modifier is the most restrictive?', options: ['public', 'protected', 'default', 'private'], correct: 'private' },
    { id: 117, category: 'Java', difficulty: 'Medium', text: 'Can an interface implement another interface?', options: ['Yes', 'No', 'Only abstract', 'Only functional'], correct: 'No' },
    { id: 118, category: 'Java', difficulty: 'Medium', text: 'Which keyword prevents a method from being overridden?', options: ['static', 'final', 'const', 'abstract'], correct: 'final' },
    { id: 119, category: 'Java', difficulty: 'Medium', text: 'What is the return type of a constructor?', options: ['void', 'int', 'Class', 'None'], correct: 'None' },
    { id: 120, category: 'Java', difficulty: 'Medium', text: 'Which package contains the Scanner class?', options: ['java.lang', 'java.util', 'java.io', 'java.net'], correct: 'java.util' },

    // Hard
    { id: 121, category: 'Java', difficulty: 'Hard', text: 'What is the contract between partial hash code and equals?', options: ['If equals is true, hashcode must be same', 'If hashcode is same, equals must be true', 'No relation', 'Must be different'], correct: 'If equals is true, hashcode must be same' },
    { id: 122, category: 'Java', difficulty: 'Hard', text: 'Which mechanism is used in serialization?', options: ['Transient', 'Volatile', 'Marker Interface', 'Reflection'], correct: 'Marker Interface' },
    { id: 123, category: 'Java', difficulty: 'Hard', text: 'What does the volatile keyword guarantee?', options: ['Atomicity', 'Visibility', 'Serialization', 'Synchronization'], correct: 'Visibility' },
    { id: 124, category: 'Java', difficulty: 'Hard', text: 'Which Garbage Collector is default in Java 8?', options: ['G1', 'Parallel GC', 'Serial GC', 'CMS'], correct: 'Parallel GC' },
    { id: 125, category: 'Java', difficulty: 'Hard', text: 'Which map preserves insertion order?', options: ['HashMap', 'TreeMap', 'LinkedHashMap', 'Hashtable'], correct: 'LinkedHashMap' },
    { id: 126, category: 'Java', difficulty: 'Hard', text: 'What implies the "is-a" relationship?', options: ['Aggregation', 'Composition', 'Inheritance', 'Association'], correct: 'Inheritance' },
    { id: 127, category: 'Java', difficulty: 'Hard', text: 'Which class is thread-safe?', options: ['StringBuilder', 'StringBuffer', 'ArrayList', 'LinkedList'], correct: 'StringBuffer' },
    { id: 128, category: 'Java', difficulty: 'Hard', text: 'Result of 1.0/0.0 in Java?', options: ['Infinity', 'Exception', '0', 'NaN'], correct: 'Infinity' },
    { id: 129, category: 'Java', difficulty: 'Hard', text: 'Can a constructor be synchronized?', options: ['Yes', 'No', 'Only static', 'Sometimes'], correct: 'No' },
    { id: 130, category: 'Java', difficulty: 'Hard', text: 'What is a marker interface?', options: ['Empty interface', 'Interface with 1 method', 'Abstract class', 'Annotation'], correct: 'Empty interface' },

    // --- PYTHON ---
    // Easy
    { id: 201, category: 'Python', difficulty: 'Easy', text: 'How do you output text in Python?', options: ['print()', 'echo', 'printf()', 'log()'], correct: 'print()' },
    { id: 202, category: 'Python', difficulty: 'Easy', text: 'Which symbol is used for comments?', options: ['//', '#', '/*', '--'], correct: '#' },
    { id: 203, category: 'Python', difficulty: 'Easy', text: 'How do you create a function?', options: ['func myFunc():', 'def myFunc():', 'function myFunc()', 'create myFunc()'], correct: 'def myFunc():' },
    { id: 204, category: 'Python', difficulty: 'Easy', text: 'Which is NOT a valid variable name?', options: ['my_var', 'myVar', '2myVar', '_myVar'], correct: '2myVar' },
    { id: 205, category: 'Python', difficulty: 'Easy', text: 'What is the extension of Python files?', options: ['.java', '.py', '.txt', '.p'], correct: '.py' },
    { id: 206, category: 'Python', difficulty: 'Easy', text: 'Which operator is used for exponentiation?', options: ['^', '**', 'exp', '^^'], correct: '**' },
    { id: 207, category: 'Python', difficulty: 'Easy', text: 'What is the output of type(10)?', options: ['<class "int">', 'integer', 'int', 'number'], correct: '<class "int">' },
    { id: 208, category: 'Python', difficulty: 'Easy', text: 'How to start a for loop?', options: ['for x in y:', 'foreach x in y', 'for(x=0;x<5;x++)', 'loop x in y'], correct: 'for x in y:' },
    { id: 209, category: 'Python', difficulty: 'Easy', text: 'Which collection is ordered and immutable?', options: ['List', 'Dictionary', 'Tuple', 'Set'], correct: 'Tuple' },
    { id: 210, category: 'Python', difficulty: 'Easy', text: 'Does Python require indentation?', options: ['Yes', 'No', 'Optional', 'Only in functions'], correct: 'Yes' },

    // Medium
    { id: 211, category: 'Python', difficulty: 'Medium', text: 'Which is a mutable data type?', options: ['Tuple', 'String', 'List', 'Integer'], correct: 'List' },
    { id: 212, category: 'Python', difficulty: 'Medium', text: 'How to handle exceptions?', options: ['try-except', 'try-catch', 'do-catch', 'try-error'], correct: 'try-except' },
    { id: 213, category: 'Python', difficulty: 'Medium', text: 'Which method adds an item to a list?', options: ['add()', 'push()', 'append()', 'insert()'], correct: 'append()' },
    { id: 214, category: 'Python', difficulty: 'Medium', text: 'What does "len()" do?', options: ['Returns length', 'Loops', 'Logs', 'Logic'], correct: 'Returns length' },
    { id: 215, category: 'Python', difficulty: 'Medium', text: 'How do you import a module?', options: ['include', 'import', 'require', 'using'], correct: 'import' },
    { id: 216, category: 'Python', difficulty: 'Medium', text: 'What is a lambda function?', options: ['Anonymous function', 'Loop', 'Class', 'Variable'], correct: 'Anonymous function' },
    { id: 217, category: 'Python', difficulty: 'Medium', text: 'Which key is used to define a class?', options: ['class', 'Class', 'def', 'struct'], correct: 'class' },
    { id: 218, category: 'Python', difficulty: 'Medium', text: 'What is __init__?', options: ['Constructor', 'Destructor', 'Import', 'Variables'], correct: 'Constructor' },
    { id: 219, category: 'Python', difficulty: 'Medium', text: 'What is the output of "Hi" * 3?', options: ['HiHiHi', 'Error', 'Hi3', 'Hii'], correct: 'HiHiHi' },
    { id: 220, category: 'Python', difficulty: 'Medium', text: 'Which set method removes an element?', options: ['delete()', 'remove()', 'pop()', 'kill()'], correct: 'remove()' },

    // Hard
    { id: 221, category: 'Python', difficulty: 'Hard', text: 'What is the GIL?', options: ['Global Interpreter Lock', 'General Interface Logic', 'Global Input List', 'None'], correct: 'Global Interpreter Lock' },
    { id: 222, category: 'Python', difficulty: 'Hard', text: 'What is a decorator?', options: ['Modifies function behavior', 'Visual style', 'Class type', 'Variable'], correct: 'Modifies function behavior' },
    { id: 223, category: 'Python', difficulty: 'Hard', text: 'Difference between is and ==?', options: ['Identity vs Equality', 'Same thing', 'Syntax sugar', 'None'], correct: 'Identity vs Equality' },
    { id: 224, category: 'Python', difficulty: 'Hard', text: 'What are *args used for?', options: ['Variable positional args', 'Keyword args', 'Pointers', 'Multiplication'], correct: 'Variable positional args' },
    { id: 225, category: 'Python', difficulty: 'Hard', text: 'What is MRO?', options: ['Method Resolution Order', 'Memory Read Operation', 'Main Run Output', 'None'], correct: 'Method Resolution Order' },
    { id: 226, category: 'Python', difficulty: 'Hard', text: 'Which module allows multi-threading?', options: ['threading', 'process', 'parallel', 'tasks'], correct: 'threading' },
    { id: 227, category: 'Python', difficulty: 'Hard', text: 'What is pickling?', options: ['Serialization', 'Encryption', 'Compression', 'Sorting'], correct: 'Serialization' },
    { id: 228, category: 'Python', difficulty: 'Hard', text: 'Are strings mutable?', options: ['No', 'Yes', 'Sometimes', 'Depends on OS'], correct: 'No' },
    { id: 229, category: 'Python', difficulty: 'Hard', text: 'What is the "pass" keyword?', options: ['Null operation', 'Skip loop', 'Return true', 'Password'], correct: 'Null operation' },
    { id: 230, category: 'Python', difficulty: 'Hard', text: 'What is a generator?', options: ['Function yielding values', 'Creates classes', 'Random number', 'Power source'], correct: 'Function yielding values' },

    // --- GK ---
    // Easy
    { id: 301, category: 'GK', difficulty: 'Easy', text: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct: 'Paris' },
    { id: 302, category: 'GK', difficulty: 'Easy', text: 'Which animal is known as the King of the Jungle?', options: ['Tiger', 'Lion', 'Elephant', 'Bear'], correct: 'Lion' },
    { id: 303, category: 'GK', difficulty: 'Easy', text: 'How many days are in a year?', options: ['365', '366', '364', '360'], correct: '365' },
    { id: 304, category: 'GK', difficulty: 'Easy', text: 'Which planet is closest to the Sun?', options: ['Venus', 'Mercury', 'Mars', 'Earth'], correct: 'Mercury' },
    { id: 305, category: 'GK', difficulty: 'Easy', text: 'What is H2O?', options: ['Water', 'Air', 'Fire', 'Gas'], correct: 'Water' },
    { id: 306, category: 'GK', difficulty: 'Easy', text: 'Who painted the Mona Lisa?', options: ['Van Gogh', 'Picasso', 'Da Vinci', 'Rembrandt'], correct: 'Da Vinci' },
    { id: 307, category: 'GK', difficulty: 'Easy', text: 'What is the largest ocean?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], correct: 'Pacific' },
    { id: 308, category: 'GK', difficulty: 'Easy', text: 'How many legs does a spider have?', options: ['6', '8', '4', '10'], correct: '8' },
    { id: 309, category: 'GK', difficulty: 'Easy', text: 'Which fruit is yellow and curved?', options: ['Apple', 'Banana', 'Orange', 'Grape'], correct: 'Banana' },
    { id: 310, category: 'GK', difficulty: 'Easy', text: 'What color is the sky on a clear day?', options: ['Blue', 'Green', 'Red', 'Yellow'], correct: 'Blue' },

    // Medium
    { id: 311, category: 'GK', difficulty: 'Medium', text: 'Which planet is the Red Planet?', options: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correct: 'Mars' },
    { id: 312, category: 'GK', difficulty: 'Medium', text: 'Who wrote Romeo and Juliet?', options: ['Shakespeare', 'Dickens', 'Hemingway', 'Austen'], correct: 'Shakespeare' },
    { id: 313, category: 'GK', difficulty: 'Medium', text: 'What is the largest continent?', options: ['Africa', 'Asia', 'North America', 'Europe'], correct: 'Asia' },
    { id: 314, category: 'GK', difficulty: 'Medium', text: 'Which element has the symbol O?', options: ['Gold', 'Silver', 'Oxygen', 'Osmium'], correct: 'Oxygen' },
    { id: 315, category: 'GK', difficulty: 'Medium', text: 'How many bones in the adult human body?', options: ['206', '208', '201', '300'], correct: '206' },
    { id: 316, category: 'GK', difficulty: 'Medium', text: 'Currency of Japan?', options: ['Yen', 'Won', 'Dollar', 'Euro'], correct: 'Yen' },
    { id: 317, category: 'GK', difficulty: 'Medium', text: 'Fastest land animal?', options: ['Lion', 'Cheetah', 'Horse', 'Leopard'], correct: 'Cheetah' },
    { id: 318, category: 'GK', difficulty: 'Medium', text: 'Hardest natural substance?', options: ['Gold', 'Diamond', 'Iron', 'Steel'], correct: 'Diamond' },
    { id: 319, category: 'GK', difficulty: 'Medium', text: 'Largest mammal?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippo'], correct: 'Blue Whale' },
    { id: 320, category: 'GK', difficulty: 'Medium', text: 'Capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'], correct: 'Canberra' },

    // Hard
    { id: 321, category: 'GK', difficulty: 'Hard', text: 'Who invented the lightbulb?', options: ['Tesla', 'Edison', 'Bell', 'Newton'], correct: 'Edison' },
    { id: 322, category: 'GK', difficulty: 'Hard', text: 'Smallest country in the world?', options: ['Monaco', 'Vatican City', 'Maldives', 'Nauru'], correct: 'Vatican City' },
    { id: 323, category: 'GK', difficulty: 'Hard', text: 'Who discovered Penicillin?', options: ['Fleming', 'Curie', 'Pasteur', 'Darwin'], correct: 'Fleming' },
    { id: 324, category: 'GK', difficulty: 'Hard', text: 'How many elements in Periodic Table?', options: ['118', '120', '110', '108'], correct: '118' },
    { id: 325, category: 'GK', difficulty: 'Hard', text: 'Speed of light?', options: ['300,000 km/s', '150,000 km/s', '300,000 m/s', 'Sound speed'], correct: '300,000 km/s' },
    { id: 326, category: 'GK', difficulty: 'Hard', text: 'First man in space?', options: ['Armstrong', 'Gagarin', 'Aldrin', 'Collins'], correct: 'Gagarin' },
    { id: 327, category: 'GK', difficulty: 'Hard', text: 'Longest river in the world?', options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'], correct: 'Nile' },
    { id: 328, category: 'GK', difficulty: 'Hard', text: 'Year World War II ended?', options: ['1944', '1945', '1946', '1939'], correct: '1945' },
    { id: 329, category: 'GK', difficulty: 'Hard', text: 'Chemical symbol for Gold?', options: ['Au', 'Ag', 'Fe', 'Cu'], correct: 'Au' },
    { id: 330, category: 'GK', difficulty: 'Hard', text: 'Who painted "Starry Night"?', options: ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Salvador Dali'], correct: 'Vincent van Gogh' }
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Main Logic Router
 */
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes('signup.html')) {
        const toggleSignupPassword = document.getElementById('toggleSignupPassword');
        const signupPasswordInput = document.getElementById('new-password');

        if (toggleSignupPassword && signupPasswordInput) {
            toggleSignupPassword.addEventListener('click', function () {
                const type = signupPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                signupPasswordInput.setAttribute('type', type);
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            });
        }
    } else if (path.includes('login.html')) {
        initLogin();
    } else if (path.includes('teacher_dashboard.html')) {
        checkSession('teacher');
        initTeacherDashboard();
    } else if (path.includes('index.html')) {
        checkSession('student');
        initSetup();
    } else if (path.includes('quiz.html')) {
        checkSession('student');
        initQuiz();
    } else if (path.includes('result.html')) {
        checkSession('student');
        initResult();
    }
});

/**
 * AUTH LOGIC
 */
function checkSession(requiredRole) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    if (requiredRole && user.role !== requiredRole) {
        alert("Access Denied: You are not a " + requiredRole);
        window.location.href = 'login.html';
    }
}

function selectRole(role) {
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('signup-form-container').style.display = 'block';
    document.getElementById('selected-role').value = role;
    document.getElementById('form-title').textContent = role === 'student' ? 'Student Sign Up' : 'Teacher Sign Up';
    const idInput = document.getElementById('new-regno');
    if (idInput) {
        idInput.placeholder = role === 'student' ? 'Registration Number' : 'UID Number';
    }
}

// Handle Signup Form
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = document.getElementById('selected-role').value;
        const name = document.getElementById('fullname').value;
        const regno = document.getElementById('new-regno').value;
        const email = document.getElementById('new-email').value;
        const pass = document.getElementById('new-password').value;
        const usersDB = JSON.parse(localStorage.getItem('usersDB')) || {};

        if (usersDB[email]) {
            alert('Email already exists!');
            return;
        }
        usersDB[email] = { name, pass, role, regno, email };
        localStorage.setItem('usersDB', JSON.stringify(usersDB));

        alert('Account created! Please login.');
        window.location.href = 'login.html';
    });
}

/**
 * PAGE: LOGIN
 */

function initLogin() {
    const form = document.getElementById('login-form');
    if (!form) return;

    
    sessionStorage.removeItem('currentUser');


    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
        
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

          
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const btn = document.getElementById('loginBtn');
        const errorMsg = document.getElementById('login-error');

      
        const originalBtnText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
        btn.disabled = true;

        setTimeout(() => {

            if (user === 'admin' && pass === 'password') {
                sessionStorage.setItem('currentUser', JSON.stringify({ role: 'student', name: 'Admin Bot', username: 'admin' }));
                window.location.href = 'index.html';
                return;
            }

           
            const usersDB = JSON.parse(localStorage.getItem('usersDB')) || {};
            const userAccount = usersDB[user]; // Lookup by Email (confusingly id="username" in HTML)

          
            if (userAccount && userAccount.pass === pass) {
               
                sessionStorage.setItem('currentUser', JSON.stringify(userAccount));

          
                if (userAccount.role === 'teacher') {
                    window.location.href = 'teacher_dashboard.html';
                } else {
                    window.location.href = 'index.html';
                }
            } else {
                errorMsg.style.display = 'flex';

            
                btn.innerHTML = originalBtnText;
                btn.disabled = false;

              
                const container = document.querySelector('.login-container');
                container.style.animation = 'shake 0.5s ease';
                setTimeout(() => container.style.animation = '', 500);
            }
        }, 800);
    });
}

/**
 * PAGE 1: SETUP
 */
function initSetup() {
    const form = document.getElementById('setup-form');

    if (!form) return;

  
    sessionStorage.removeItem('quizState');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const category = document.getElementById('category').value;
        const difficulty = document.getElementById('difficulty').value;

      
        sessionStorage.setItem('category', category);
        sessionStorage.setItem('difficulty', difficulty);

      
        let filteredQuestions = QUESTIONS_DB.filter(q =>
            (q.category === category || category === 'Any') &&
            (q.difficulty === difficulty || difficulty === 'Any')
        );

      
        shuffleArray(filteredQuestions);

     
        filteredQuestions = filteredQuestions.slice(0, 10);

        if (filteredQuestions.length === 0) {
            alert('No questions found for this selection. Please try Java/Easy or Python/Easy.');
            return;
        }

        const initialState = {
            questions: filteredQuestions,
            currentIndex: 0,
            answers: {}, 
            timePerQuestion: {}, 
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
const TIME_LIMIT = 15;

function initQuiz() {
    const state = JSON.parse(sessionStorage.getItem('quizState'));
    if (!state) {
        window.location.href = 'index.html';
        return;
    }

    renderQuestion(state);
    startTimer(state);

  
    document.getElementById('nextBtn').addEventListener('click', () => nextQuestion(state));
    document.getElementById('prevBtn').addEventListener('click', () => prevQuestion(state));
    document.getElementById('submitBtn').addEventListener('click', () => submitQuiz(state));
}

function renderQuestion(state) {
    const question = state.questions[state.currentIndex];
    const total = state.questions.length;
    const current = state.currentIndex + 1;

 
    document.getElementById('question-progress').textContent = `Question ${current} of ${total}`;

   
    const questionContainer = document.querySelector('.question-container');
    if (questionContainer) {
        questionContainer.classList.remove('fade-in-active');
        void questionContainer.offsetWidth; 
        questionContainer.classList.add('fade-in-active');
    }

    document.getElementById('questionText').textContent = question.text;

  
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;

     
        if (state.answers[question.id] === opt) {
            btn.classList.add('selected');
        }

        btn.onclick = () => selectOption(state, question.id, opt, btn);
        optionsContainer.appendChild(btn);
    });

   
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

        
        if (timeLeft <= 5) {
            timerElem.classList.add('warning');
        } else {
            timerElem.classList.remove('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(quizTimerInterval);
           
            recordTime(state, questionId, TIME_LIMIT);

         
            if (!state.answers[questionId]) {
                state.answers[questionId] = null;
            }
            saveState(state);

         
            if (state.currentIndex < state.questions.length - 1) {
              
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
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (!state || !currentUser) {
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

    if (scoreElem) scoreElem.textContent = `${percentage}%`;
    if (correctElem) correctElem.textContent = `${correctCount}/${total}`;


    if (!sessionStorage.getItem('scoreSaved')) {
        const resultsDB = JSON.parse(localStorage.getItem('quizResults')) || [];

        resultsDB.push({
            studentName: currentUser.name,
            email: currentUser.email, 
            score: `${percentage}%`,
            category: sessionStorage.getItem('category') || 'General',
            difficulty: sessionStorage.getItem('difficulty') || 'Medium',
            date: new Date().toLocaleDateString()
        });

        localStorage.setItem('quizResults', JSON.stringify(resultsDB));
        sessionStorage.setItem('scoreSaved', 'true'); 
    }

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

/**
 * TEACHER DASHBOARD LOGIC
 */
function initTeacherDashboard() {
    const resultsDB = JSON.parse(localStorage.getItem('quizResults')) || [];
    const tbody = document.getElementById('results-body');

   
    const validResults = resultsDB.filter(r => r.email || r.username);

   
    document.getElementById('total-students').textContent = validResults.length;

   
    if (validResults.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4">No quizzes taken yet.</td></tr>';
        return;
    }

   
    const reversedDB = [...validResults].reverse();

    tbody.innerHTML = reversedDB.map(r => `
        <tr>
            <td>
                <strong>${r.studentName}</strong><br>
                <span style="font-size:0.8rem; color:#666">${r.email || r.username || 'No Email'}</span>
            </td>
            <td>${r.category} <span class="badge" style="background:#ddd; color:#333; font-size:0.7em;">${r.difficulty || '-'}</span></td>
            <td><span class="badge">${r.score}</span></td>
            <td>${r.date}</td>
        </tr>
    `).join('');
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}
