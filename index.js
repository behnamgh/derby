const questions = [
  {
    key: "goa",
    questions: [
      {
        query: "been in goa???",
      },
    ],
  },
  {
    key: "moreThanYear",
    questions: [
      {
        query: "year???",
      },
    ],
  },
  {
    key: "glass",
    questions: [
      {
        query: "glass???",
      },
    ],
  },
  {
    key: "nationality",
    questions: [
      {
        query: "nationality???",
      },
    ],
  },
  {
    key: "hair",
    questions: [
      {
        query: "hair???",
      },
    ],
  },
  {
    key: "beard",
    questions: [
      {
        query: "beard???",
      },
    ],
  },
  {
    key: "location",
    questions: [
      {
        query: "goa???",
      },
      {
        query: "Berlin???",
      },
    ],
  },
  {
    key: "role",
    questions: [
      {
        query: "QA???",
      },
    ],
  },
  {
    key: "squad",
    questions: [
      {
        query: "squad???",
      },
    ],
  },
];
const people = [
  {
    name: "noor",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "false",
    goa: "false",
  },
  {
    name: "shreyanesh",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "srikar",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "false",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "irwin",
    role: "developer",
    squad: "center",
    location: "berlin",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "manpreet",
    role: "qa",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "true",
    goa: "false",
  },
  {
    name: "jaideep",
    role: "qa",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    glass: "true",
    beard: "true",
    hair: "black",
    moreThanYear: "false",
    goa: "false",
  },
  {
    name: "ishan",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "false",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "dinesh",
    role: "qa",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "true",
    goa: "false",
  },
  {
    name: "abhay",
    role: "developer",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "false",
    goa: "true",
  },
  {
    name: "zurez",
    role: "developer",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "false",
    goa: "false",
  },
  {
    name: "muzammil",
    role: "developer",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "nihal",
    role: "developer",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "true",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "behnam",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "IRAN",
    beard: "false",
    funQuestion: "is it behnam",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "rahul",
    role: "qa",
    squad: "kitchen",
    location: "goa",
    beard: "true",
    nationality: "INDIA",
    funQuestion: "is it Rohit",
    hair: "black",
    moreThanYear: "false",
    goa: "true",
  },
  {
    name: "Rohit",
    role: "developer",
    squad: "kitchen",
    location: "goa",
    beard: "true",
    nationality: "INDIA",
    funQuestion: "is it Rohit",
    hair: "brown",
    moreThanYear: "false",
    goa: "true",
  },
  {
    name: "Sam",
    beard: "true",
    squad: "excellence",
    role: "developer",
    location: "berlin",
    nationality: "USA",
    funQuestion: "is he going to pay 30 euros in near future to me???",
    hair: "bald",
    moreThanYear: "true",
    goa: "false",
  },
  {
    name: "Baris",
    beard: "true",
    role: "teamLead",
    squad: "center",
    location: "berlin",
    nationality: "TURKEY",
    funQuestion: "is he fan of fanarbaghche",
    hair: "brown",
    moreThanYear: "false",
    goa: "false",
  },
  {
    name: "Janosch",
    beard: "false",
    role: "cto",
    location: "goa",
    nationality: "GERMANY",
    funQuestion: "is he fan of CTO",
    hair: "brown",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "Pragna",
    role: "qa",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    funQuestion: "is she",
    hair: "black",
    moreThanYear: "false",
    goa: "false",
  },
  {
    name: "Ronald",
    role: "qa",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    funQuestion: "is he cycler",
    beard: "true",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "Clemen",
    role: "devops",
    squad: "excellence",

    location: "berlin",
    nationality: "GERMANY",
    funQuestion: "wow",
    hair: "brown",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "Ketan",
    role: "teamLead",
    squad: "kitchen",

    location: "berlin",
    nationality: "INDIA",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "Irwin",
    role: "developer",
    location: "berlin",
    squad: "center",
    nationality: "INDIA",
    funQuestion: "in love with partner app",
    hair: "black",
    moreThanYear: "true",
    goa: "true",
  },
  {
    name: "Mukesh",
    role: "devops",
    squad: "devops",
    location: "goa",
    nationality: "INDIA",
    hair: "black",
    moreThanYear: "false",
    goa: "false",
  },
];
let result = [];
const elements = Object.keys(people[0]).filter((i) => i !== "name");

let gameResult = {
  started: "false",
  status: 1,
  answers: {},
};
let lastResult = {
  lengthNumber: 0,
  count: 0,
};
const findNextQuestionTopic = () => {
  let remainingPlayer = result.length;
  let halfPlayerCount = Math.floor(remainingPlayer / 2);
  return elements.reduce((acc, cur) => {
    if (
      gameResult.answers[cur] ||
      !questions.find((step) => step.key === cur)
    ) {
      return acc;
    }
    if (acc.diff === undefined) {
      return {
        q: cur,
        diff: Math.abs(
          halfPlayerCount -
            result.filter((person) => person[cur] === result[0][cur]).length
        ),
      };
    }
    let currentDiff = Math.abs(
      halfPlayerCount -
        result.filter((person) => person[cur] === result[0][cur]).length
    );
    let negativeDiff = Math.abs(
      halfPlayerCount -
        result.filter((person) => person[cur] !== result[0][cur]).length
    );
    if (acc.diff > currentDiff || acc.diff > negativeDiff) {
      return {
        q: cur,
        diff: acc.diff > currentDiff ? currentDiff : negativeDiff,
      };
    }
    return acc;
  }, {});
};
const checkFunQuestion = () => {
  if (result.length === 2) {
    if (result[0].funQuestion && result[1].funQuestion) {
      console.log("first");
      const targetIndex = randomNumberPicker(2);
      console.log("first", targetIndex);
      return {
        question: result[targetIndex - 1].funQuestion,
        yes: result[targetIndex - 1].name,
        no: result[targetIndex - 1 === 0 ? 0 : 1].name,
      };
    } else if (result[0].funQuestion || result[1].funQuestion) {
      console.log("IS", result[0].funQuestion || result[1].funQuestion);
      return result[0].funQuestion
        ? {
            question: result[0].funQuestion,
            yes: result[0].name,
            no: result[1].name,
          }
        : {
            question: result[1].funQuestion,
            yes: result[1].name,
            no: result[0].name,
          };
    } else {
      return {
        question: `is he/she ${result[0].name}`,
        yes: result[0].name,
        no: result[1].name,
      };
    }
  }
  return false;
};
const showGuess = (currentResult) => {
  document.getElementById("akinator-image").src = `./styles/images/happy.png`;

  clearBox();
  let questionBox = document.getElementById("question-box");

  const para = document.createElement("img");
  para.className = "profile";

  document.getElementById("start-game").style.display = `flex`;

  const name = document.createElement("h3");
  name.innerHTML = currentResult[0].name;
  para.src = `./styles/images/staffs/${currentResult[0].name}.jpeg`;
  questionBox.appendChild(para);
  questionBox.appendChild(name);
};
const checkLoop = () => {
  if (result.length === 1) {
    showGuess(result);
    return true;
  }
  if (lastResult.lengthNumber === result.length) {
    if (lastResult.count === 5) {
      console.log("-----------------------LOOP---------------------"); //loop
      return true;
    } else {
      lastResult.count = lastResult.count + 1;
      return false;
    }
  } else {
    lastResult = {
      lengthNumber: result.length,
      count: 0,
    };
    return false;
  }
};
const clearBox = () => {
  let myNode = document.getElementById("question-box");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
};
const startGame = () => {
  result = [...people];
  gameResult = {
    started: "true",
    status: 1,
    answers: {},
  };
  document.getElementById("start-game").style.display = `none`;
  nextRound();
};
const nextRound = () => {
  updateProgressBar();

  const loopHappened = checkLoop();
  if (loopHappened) return;

  const funQuestion = checkFunQuestion();
  if (funQuestion) {
    console.log(result);
    showFunQuestion(funQuestion);
    return;
  }

  updateQuestion(findNextQuestionTopic().q);

  // clean dom
  // find next question and call function
};
const showFunQuestion = (funQuestion) => {
  clearBox();

  let questionBox = document.getElementById("question-box");

  const para = document.createElement("p");
  const node = document.createTextNode(funQuestion.question);
  para.setAttribute("key", "fun");
  para.className = "question";
  para.appendChild(node);
  questionBox.appendChild(para);

  const yesBtn = document.createElement("BUTTON"); // Create a <button> element
  yesBtn.innerHTML = "YES";
  yesBtn.value = funQuestion.yes;
  yesBtn.className = "answer";
  questionBox.appendChild(yesBtn);
  const noBtn = document.createElement("BUTTON"); // Create a <button> element
  noBtn.innerHTML = "NO";
  noBtn.value = funQuestion.no;
  noBtn.className = "answer";
  questionBox.appendChild(noBtn);
};
const updateProgressBar = () => {
  document.getElementById(
    "akinator-image"
  ).src = `./styles/images/${gameResult.status}.png`;
  document.getElementById("myBar").style.width = `${
    (1 - (result.length - 1) / people.length) * 100
  }%`;
};
const updateQuestion = (questionKey) => {
  updateProgressBar();
  clearBox();
  let question = questions.find((step) => step.key === questionKey);

  let questionBox = document.getElementById("question-box");

  const para = document.createElement("p");
  const node = document.createTextNode(question.questions[0].query);
  para.setAttribute("key", question.key);
  para.className = "question";
  para.appendChild(node);
  questionBox.appendChild(para);
  const answersOption = result.map((person) => person[question.key]);
  
  const uniqAnswer = new Set(answersOption);
  
  const btnContainer = document.createElement("div");
  uniqAnswer.forEach((element) => {
    const btn = document.createElement("BUTTON"); // Create a <button> element
    btn.innerHTML = element !== undefined ? element : "NA";
    btn.value = element;
    btn.className = "answer";
    btnContainer.appendChild(btn);
  });
  questionBox.appendChild(btnContainer);
};

document.addEventListener("click", function (e) {
  if (e.target && e.target.className == "answer") {
    if (gameResult.status < 4) {
      gameResult.status = gameResult.status + 1;
    }
    const userAnswer = e.target.value;
    let q = document.getElementsByClassName("question");
    let key = q[0].getAttribute("key");
    if (key === "fun") {
      return showGuess(result.filter((person) => person.name === userAnswer));
    }
    result = result.filter((person) => person[key] === userAnswer);
    nextRound();
  }
});
