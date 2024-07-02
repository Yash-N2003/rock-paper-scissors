let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let resetBtn = document.querySelector("#reset");


const resetScore = ()=>{
    userScore = 0;
    compScore = 0;
    userScorePara.innerText  = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#EBEBD3";
}

// resetBtn.addEventListener("click", resetScore());

const showWinner =(userWin, userChoice, compChoice) =>{
    if(userWin === true){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win ${userChoice} beats ${compChoice}!`;
    msg.style.backgroundColor = "Green"; 
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats ${userChoice}!`;
        msg.style.backgroundColor = "Red"; 
    }
}

let genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game was draw. Play Again";
    msg.style.backgroundColor = "#EBEBD3"; 
}

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
    if(userChoice==="rock"){
       userWin = compChoice === "scissors" ? true : false;
    }else if(userChoice==="paper"){
        userWin = compChoice === "rock" ? true : false;
     }else if(userChoice==="scissors") {
        userWin = compChoice === "paper" ? true : false;
     }
     showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        const userChoice = choice.id;
        playGame(userChoice);
        
 })

})
    
resetBtn.addEventListener("click", resetScore);
