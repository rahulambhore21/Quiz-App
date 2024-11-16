const questions =[
    {
      question: "What is the capital of Japan?",
      options: [
        { text: "A. Tokyo", correct: true },
        { text: "B. Seoul", correct: false },
        { text: "C. Beijing", correct: false },
        { text: "D. Bangkok", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: [
        { text: "A. Earth", correct: false },
        { text: "B. Mars", correct: true },
        { text: "C. Jupiter", correct: false },
        { text: "D. Venus", correct: false }
      ]
    },
    {
      question: "What is the largest mammal in the world?",
      options: [
        { text: "A. Elephant", correct: false },
        { text: "B. Blue Whale", correct: true },
        { text: "C. Giraffe", correct: false },
        { text: "D. Rhino", correct: false }
      ]
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        { text: "A. William Shakespeare", correct: true },
        { text: "B. Charles Dickens", correct: false },
        { text: "C. Mark Twain", correct: false },
        { text: "D. Jane Austen", correct: false }
      ]
    },
    {
      question: "Which is the smallest country in the world?",
      options: [
        { text: "A. Monaco", correct: false },
        { text: "B. Vatican City", correct: true },
        { text: "C. San Marino", correct: false },
        { text: "D. Nauru", correct: false }
      ]
    }
  ]
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
