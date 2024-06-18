let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let compChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
    
}



choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        const newid = choice.id;
        console.log(`${newid} was clicked`);

 })

})
    
