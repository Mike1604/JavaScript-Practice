let btncolours = ["red","blue","green","yellow"];

let gamePatern=[];

let usrClickPatern=[];

let gameStarted = "false";

let lvl = 0;

let lastMoveindex=0;

const restartGame = ()=>{
    lvl = 0;
    lastMoveindex=0;
    gameStarted="true";
    gamePatern=[];
    usrClickPatern=[];
    nextSequence();
}

const playSound = (path) =>{
    let sound= `sounds/${path}.mp3`;
    let audio; 
    audio = new Audio(sound);
    audio.play();
}

const animatePress = (color) =>{
    const div = document.getElementById(`${color}`);
    div.classList.add("pressed");
    setTimeout(() => {
        div.classList.remove("pressed");
    }, 100);
}

const checkAnswer = ()=>{
    if(usrClickPatern[lastMoveindex] !== gamePatern[lastMoveindex]){
        playSound("wrong");
        document.body.classList.add("game-over");
        setTimeout(() => {
            document.body.classList.remove("game-over");
            const tittle = document.getElementById("level-title");
            tittle.textContent = `Game Over, Press Any Key to Restart`
        }, 200);
        gameStarted = "lost"
    }else{
        if(lastMoveindex === (lvl-1)){
            lastMoveindex=0;
            usrClickPatern=[];
            setTimeout(() => {
                nextSequence();
            }, 200);
                
        }else{
            lastMoveindex++;
        }
    }
}

const nextSequence = () =>{
    lvl++;
    const tittle = document.getElementById("level-title");
    tittle.textContent = `Level ${lvl}`
    let randomNumber = Math.floor(Math.random()*4);
    let randomChose = btncolours[randomNumber];

    gamePatern.push(randomChose);

    $(`#${randomChose}`).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    animatePress(randomChose);
    playSound(randomChose);

    console.log(`#${randomChose}`);
    console.log(randomChose);
    console.log(gamePatern);

}

$(".btn").on("click",function(){
    if(gameStarted === "false"){
        setTimeout(() => {
            gameStarted="true";
            nextSequence();
        }, 300);

    }
    else{
        let userChosenColour  = this.id;
        playSound(userChosenColour);
        animatePress(userChosenColour);
        usrClickPatern.push(userChosenColour);
        checkAnswer();
    }
});

document.addEventListener("keydown", function(event){
    if(gameStarted === "false"){
        let doc=event.keyCode;
        if(doc === 65){
            nextSequence();
            gameStarted="true";
        }
    }
    else if (gameStarted === "lost"){
        restartGame();
    }
    
});

