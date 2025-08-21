// Select Elements
let countSpan = document.querySelector(".count span");
let bulletSpansContainer = document.querySelector(".bullets .spans");
let bulletsContainer = document.querySelector(".bullets");
let questionContainer = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let rightAnswers = 0;
let indexOfQuestion = 0;
let submitButton = document.querySelector(".submit-button");
let results = document.querySelector(".results");
let countDownInterval;
function getQuestions() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionObject = JSON.parse(this.responseText);
      let numOfQuestions = questionObject.length;
      createBullets(numOfQuestions);
      addQuestionData(questionObject[indexOfQuestion], numOfQuestions);
      countDown(90, numOfQuestions);
      submitButton.addEventListener("click", () => {
        let theRightAnswer = questionObject[indexOfQuestion]["right_answer"];
        checkAnswer(theRightAnswer);

        indexOfQuestion++;
        questionContainer.innerHTML = "";
        answersArea.innerHTML = "";
        if (indexOfQuestion < numOfQuestions) {
          addQuestionData(questionObject[indexOfQuestion], numOfQuestions);
          handleBullets();
          clearInterval(countDownInterval);
          countDown(90, numOfQuestions);
        } else {
          showResults(numOfQuestions);
        }
      });
    }
  };
  myRequest.open("GET", "html_question.json", true);

  myRequest.send();
}

function createBullets(numOfQuestions) {
  countSpan.innerHTML = numOfQuestions;
  for (let i = 1; i <= numOfQuestions; i++) {
    let theBullet = document.createElement("span");
    if (i === 1) {
      theBullet.className = "on";
    }
    bulletSpansContainer.appendChild(theBullet);
  }
}

function addQuestionData(obj, count) {
  let question = document.createElement("h2");
  question.textContent = obj["title"];
  questionContainer.appendChild(question);
  for (let j = 1; j <= 4; j++) {
    let answer = document.createElement("div");
    answer.className = "answer";
    let input = document.createElement("input");
    input.name = "questions";
    input.id = `answer_${j}`;
    input.type = "radio";
    input.dataset.answer = obj[`answer_${j}`];
    if (j == 1) {
      input.checked = true;
    }
    answer.appendChild(input);

    let label = document.createElement("label");
    label.htmlFor = `answer_${j}`;
    label.textContent = obj[`answer_${j}`];
    answer.appendChild(label);
    answersArea.appendChild(answer);
    answer.addEventListener("click", () => {
      document.getElementById(`answer_${j}`).checked = true;
    });
    answer.style.cursor = "pointer";
  }
}

function checkAnswer(rValue) {
  let answers = document.getElementsByName("questions");
  let theChosenAnswer;
  answers.forEach((answer) => {
    if (answer.checked) {
      theChosenAnswer = answer.dataset.answer;
    }
  });
  if (rValue === theChosenAnswer) {
    rightAnswers++;
  }
}

function handleBullets() {
  let bulletSpans = document.querySelectorAll(".bullets .spans span");
  let bulletSpansArray = Array.from(bulletSpans);
  bulletSpansArray.forEach((span, index) => {
    if (index === indexOfQuestion) {
      span.classList.add("on");
    }
  });
}

function showResults(count) {
  if (indexOfQuestion === count) {
    answersArea.remove();
    questionContainer.remove();
    submitButton.remove();
    bulletsContainer.remove();
    if (rightAnswers === count) {
      results.innerHTML = `<span class="excellent">Excellent</span> All Answers Is Right`;
    } else if (rightAnswers > count / 2 && rightAnswers < count) {
      results.innerHTML = `<span class="good">Good</span> Your Grade is ${rightAnswers} from ${count}`;
    } else {
      results.innerHTML = `<span class="bad">Bad</span> Your Grade is ${rightAnswers} from ${count}`;
    }
    results.style.cssText = `background-color: #213448;padding: 50px 10px;font-size:25px;margin-top:10px;text-align:center;color:#ecefca;border-radius:8px;`;
    let button = document.createElement("button");
    button.className = "restart";
    button.textContent = "Restart";
    results.appendChild(button);
    button.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

function countDown(duration, numOfQuestions) {
  let minutes;
  let seconds;
  countDownInterval = setInterval(() => {
    minutes = parseInt(duration / 60);
    seconds = parseInt(duration % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    document.querySelector(".countdown").innerHTML = `${minutes} : ${seconds}`;
    if (--duration < 0) {
      clearInterval(countDownInterval);
      submitButton.click();
    }
  }, 1000);
}

getQuestions();
