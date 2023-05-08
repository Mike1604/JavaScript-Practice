const computerChoiceDisplay =  document.getElementById("computer-choice");
const usrChoiceDisplay =  document.getElementById("user-choice");
const resutDisplay =  document.getElementById("result");
const possibleChoises = document.querySelectorAll("button");

let usrChoice;
let cmptrChoice;
const results ={
    RockPaper:"You lose! :(",
    RockScissors:"You Win!",
    PaperRock:"You Win!",
    PaperScissors:"You lose! :(",
    ScissorsRock:"You lose! :(",
    ScissorsPaper:"You Win!"
}
possibleChoises.forEach(choice => {
    choice.addEventListener("click", (e) =>{
        usrChoice = e.target.id;
        usrChoiceDisplay.textContent = usrChoice; 
        cmptrChoice = generateAnswer();
        computerChoiceDisplay.textContent = cmptrChoice;
        let answer = usrChoice+cmptrChoice;
        if(results[answer]){
            resutDisplay.textContent =  results[answer];
        }else{
            resutDisplay.textContent = "It's a Draw!"
        }
    })
});

const generateAnswer = () =>{
    let randomChoice =  Math.floor(Math.random()*3)+1;
    switch (randomChoice) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}
