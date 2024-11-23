const questions = [
  {
    question: "Iconography is the use of text and images to convey specific messages.",
    options: [
      { text: "A. False", correct: true },
      { text: "B. True", correct: false }
    ],
    explanation: "Iconography involves the use of symbols or images to communicate ideas, not text."
  },
  {
    question: "Repeating design patterns or templates in a presentation is advisable?",
    options: [
      { text: "A. Yes", correct: true },
      { text: "B. No", correct: false }
    ],
    explanation: "Repeating design patterns or templates helps maintain consistency and cohesion throughout the presentation."
  },
  {
    question: "Basics of presentation includes all except:",
    options: [
      { text: "A. Coordination with teammates", correct: false },
      { text: "B. Visually pleasing", correct: false },
      { text: "C. Research on the topic", correct: false },
      { text: "D. Blindly reading the presentation", correct: true }
    ],
    explanation: "Blindly reading the presentation is not a part of good presentation basics, as it reduces engagement."
  },
  {
    question: "Wordy text can be made concise by:",
    options: [
      { text: "A. Putting content not related to the topic", correct: false },
      { text: "B. Practicing reading fast", correct: false },
      { text: "C. Using bullet points in necessary slides", correct: true },
      { text: "D. Keeping the text as it is", correct: false }
    ],
    explanation: "Using bullet points helps condense information and make it easier to digest."
  },
  {
    question: "Which of the following comes under visual design?",
    options: [
      { text: "A. Images", correct: false },
      { text: "B. Typography", correct: false },
      { text: "C. Layout and color", correct: false },
      { text: "D. All of the above", correct: true }
    ],
    explanation: "Visual design includes all elements such as images, typography, layout, and color to create an effective design."
  },
  {
    question: "How does typography impact the user experience?",
    options: [
      { text: "A. It limits creative options", correct: false },
      { text: "B. It adds complexity to the text", correct: false },
      { text: "C. It affects readability and tone", correct: true },
      { text: "D. It plays no role at all", correct: false }
    ],
    explanation: "Typography affects both the readability of the text and the tone it conveys to the audience."
  }
];


  const questionElement = document.getElementById("question");
  const optionBtn = document.getElementById("optionBtn");
  const nextBtn = document.getElementById("next-btn");
  
  let score = 0;
  let currentQuestionIndex = 0;
  
  function startQuiz() {
      score =0;
      currentQuestionIndex = 0;
      nextBtn.innerHTML = "Next";
      showQuestion();
    }
    
    function showQuestion() {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        const questionNo = currentQuestionIndex +1;
        questionElement.innerHTML = questionNo+"."+currentQuestion.question;
        
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.innerHTML = option.text;
            button.classList.add("btn");
            // button.classList.add("no-hover");
            optionBtn.appendChild(button);
            // console.log(option.text);
            if(option.correct) {
              button.dataset.correct = option.correct;
            }
            button.addEventListener("click", selectAnswer )
        });
    }
    function resetState() {
        nextBtn.style.display = "none";
        while(optionBtn.firstChild) {
            optionBtn.removeChild(optionBtn.firstChild);
        }
    }
    function selectAnswer(e){
      // const hover = document.querySelector(".no-hover");
      // hover.classList.remove("no-hover");
      const exp = document.createElement("div");
      exp.innerHTML = questions[currentQuestionIndex].explanation;
      exp.id = "explanation";
      optionBtn.appendChild(exp);
      nextBtn.style.display="block";
      const buttonSelected = e.target;
      const isCorrect = buttonSelected.dataset.correct === "true";

      if (isCorrect) {
        buttonSelected.classList.add("correct");
        score++;
      }
      else{
        buttonSelected.classList.add("incorrect");
      }
      Array.from(optionBtn.children).forEach(button=>{
        if(button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        else if(button.dataset.correct === "false") {
          button.classList.add("incorrect");
        }
        button.disabled = true;
      })
    }
    function showScore(){
      resetState();
      questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}!`;
      nextBtn.innerHTML = "Play Again!";
      nextBtn.style.display = "block";
      
    }
      function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
          showQuestion();
        }
        else{
          showScore();
        }
      }
    nextBtn.addEventListener("click", () => {
      if(currentQuestionIndex<questions.length){
        handleNextButton();
      }
      else{
        startQuiz();
      }
    })
    startQuiz();
    console.log(questions.length);
