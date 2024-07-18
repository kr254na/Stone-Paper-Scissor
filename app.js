let userScore=0;
let compScore = 0;
let totalScore = 5;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const resetBtn = document.querySelector(".reset-btn");
const msg = document.querySelector("#msg");
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        if (userScore == totalScore) {
            userScorePara.style.color = "green";
            compScorePara.style.color = "red";
            msg.innerText = "You won the game!";
            msg.style.backgroundColor = "green";
            choices.forEach((choice) => {
                choice.style.display = "none";
            });      
            
            return;
        }
        userScorePara.style.color = "green";
        compScorePara.style.color = "red";
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        if (compScore == totalScore) {
            userScorePara.style.color = "red";
            compScorePara.style.color = "green";
            msg.innerText = "You lost the game!";
            msg.style.backgroundColor = "red";
            choices.forEach((choice) => {
                choice.style.display = "none";
            });
            return;
        }
        userScorePara.style.color = "red";
        compScorePara.style.color = "green";
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const genComputerChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game was draw.Play again!"
    msg.style.backgroundColor = "#081b31";
    userScorePara.style.color = "#081b31";
    compScorePara.style.color = "#081b31";
}
const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin;
        if (userChoice === 'stone') {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === 'paper') {
            userWin = compChoice === 'stone' ? true : false;
        }
        else {
            userWin = compChoice === 'stone' ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", Respond => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
    userScorePara.style.color = "green";
    compScorePara.style.color = "red";
    choices.forEach((choice) => {
        choice.style.display = "flex";
    });
})