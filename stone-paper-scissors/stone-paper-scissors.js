let userScore = 0;
let compScore = 0;

const spsChoices = document.querySelectorAll((".option"));
const msg = document.querySelector("#msg");
const userScoreUpdate = document.querySelector("#user-score");
const compScoreUpdate = document.querySelector("#comp-score");

spsChoices.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});

const getCompChoice = () =>
{
    const choice = ["rock" , "paper" , "scissors"];
    const rndIdx = Math.floor(Math.random()*3);
    return choice[rndIdx];
}

const drawGame = () =>
{
    msg.innerText = "Game Was Draw. play Again";
    msg.style.backgroundColor = "#735D78";
}

const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreUpdate.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }

    else
    {
        compScore++;
        compScoreUpdate.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    const compChoice = getCompChoice();

    if(userChoice === compChoice)
    {
        drawGame();
    }

    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice==="paper"?false:true;
        }

        else if(userChoice === "paper")
        {
            userWin = compChoice==="scissors"?false:true;
        }

        else
        {
            userWin = compChoice==="rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};