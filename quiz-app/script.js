const quizData = [
  {
    question: "What is large scale chemistry?",
    a: "10",
    b: "13",
    c: "16",
    d: "21",
    correct: "d",
  },
  {
    question: "when was javascript launched?",
    a: "10",
    b: "13",
    c: "19",
    d: "16",
    correct: "c",
  },
  {
    question: "who is the president of Nigeria?",
    a: "10",
    b: "16",
    c: "13",
    d: "19",
    correct: "b",
  },
  {
    question: "What is physical chemistry?",
    a: "10",
    b: "13",
    c: "16",
    d: "19",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heart.innerText = "@";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

submitBtn.addEventListener("click", () => {
  // CHECK TO SEE THE ANSWER
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You got ${score}/${quizData.length} questions</h2>
      <button onclick="location.reload()">Refresh</button>
      `;
      setInterval(createHeart, 100);
    }
  } else {
    alert("You need to select an answer to proceed");
  }
});
