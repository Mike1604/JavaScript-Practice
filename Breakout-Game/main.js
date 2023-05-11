const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
const blockWidth = 100;
const blockHeight = 20;
const boardHeight = 300;
const boardWidth = 560;
const ballDiamater = 20;
let timerId;
let xDirection = -2;
let yDirection = 2;
let score = 0;

const usrStart = [230,10]; 
let currentPosition = usrStart;

const ballStart = [270,40];
let ballCurrentPosition = ballStart;

class block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis+blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis+blockHeight];
        this.topRight = [xAxis+blockWidth, yAxis+blockHeight];
    }
}

const blocks=[
    new block(10,270),
    new block(120,270),
    new block(230,270),
    new block(340,270),
    new block(450,270),
    new block(10,240),
    new block(120,240),
    new block(230,240),
    new block(340,240),
    new block(450,240),
    new block(10,210),
    new block(120,210),
    new block(230,210),
    new block(340,210),
    new block(450,210),
];

function addblocks(){
    for(let i=0; i<blocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0]+'px';
        block.style.bottom = blocks[i].bottomLeft[1]+'px';
        grid.appendChild(block);
    }

}
addblocks();

const user = document.createElement('div');
user.classList.add('user');
user.style.left=currentPosition[0]+'px';
user.style.bottom=currentPosition[1]+'px';
grid.appendChild(user);

function drawUser(){
    user.style.left=currentPosition[0]+'px';
}

function drawBall(){
    ball.style.left =  ballCurrentPosition[0]+'px'; 
    ball.style.bottom =  ballCurrentPosition[1]+'px';
}


function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 0){
                currentPosition[0] -= 30;
                drawUser();
            }
            break;
        case 'ArrowRight':
            if(currentPosition[0] < boardWidth-blockWidth){
                currentPosition[0] += 30;
                drawUser();
            }
            break;
    }
}

document.addEventListener('keydown',moveUser);

//Add ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball); 

function moveBall(){
    checkForCollisions();
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
}

timerId = setInterval(moveBall,10);

//Check for collitions

function checkForCollisions(){
    //block collisions
    for(let i = 0; i<blocks.length; i++){
        if(
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiamater) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ){
            const allblocks = Array.from(document.querySelectorAll('.block'));
            allblocks[i].classList.remove('block');
            blocks.splice(i,1);
            ChangeDirection();
            score++;
            scoreDisplay.textContent = score;
            if(blocks.length === 0){
                scoreDisplay.textContent = "You Win!!";
                clearInterval(timerId);
                document.removeEventListener("keydown",moveUser);
            }
        }
    }
    //user Collision
    if(ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0]+blockWidth && 
        ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1]+blockHeight){
            ChangeDirection();
    }
    //Wall collisions
    if(ballCurrentPosition[0] >= (boardWidth - ballDiamater) || ballCurrentPosition[1] >= (boardHeight - ballDiamater) || ballCurrentPosition[0] <= 0){
        ChangeDirection();
    }
    if(ballCurrentPosition[1] <=0){
        clearInterval(timerId);
        scoreDisplay.textContent="GAME OVER!! You lose";
        document.removeEventListener("keydown",moveUser)
    }
}

function ChangeDirection(){
    if(xDirection === 2 && yDirection ===2){
        yDirection = -2;
        return;
    }
    if(xDirection === 2 && yDirection === -2){
        xDirection=-2;
        return
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2;
        return;
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2;
        return;
    }

}