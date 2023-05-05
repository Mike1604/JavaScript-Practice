
let n=document.querySelectorAll(".drum").length;
for(let i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let doc = this.innerHTML;
        console.log(doc);
        let audio;
        switch (doc) {
            case "w":
                audio = new Audio('/Drum Kit/sounds/tom-1.mp3');
                break;
            case "a":
                audio = new Audio('/Drum Kit/sounds/tom-2.mp3');
                break;
            case "s":
                audio = new Audio('/Drum Kit/sounds/tom-3.mp3');
                break;
            case "d":
                audio = new Audio('/Drum Kit/sounds/tom-4.mp3');
                break;
            case "j":
                audio = new Audio('/Drum Kit/sounds/snare.mp3');
                break;
            case "k":
                audio = new Audio('/Drum Kit/sounds/hihat.mp3');
                break;
            case "l":
                audio = new Audio('/Drum Kit/sounds/kick-bass.mp3');
                break;
            default:
                console.log(doc); 
                return;
                break;
        }
        buttonAnimation(doc);
        audio.play();
    });
}

document.addEventListener("keydown", function(event){
    let doc=event.keyCode;
    let act;
    let audio;
    switch (doc) {
        case 87:
            audio = new Audio('/Drum Kit/sounds/tom-1.mp3');
            act="w";
            break;
        case 83:
            audio = new Audio('/Drum Kit/sounds/tom-2.mp3');
            act="s";
            break;
        case 65:
            audio = new Audio('/Drum Kit/sounds/tom-3.mp3');
            act="a";
            break;
        case 68:
            audio = new Audio('/Drum Kit/sounds/tom-4.mp3');
            act="d";
            break;
        case 74:
            audio = new Audio('/Drum Kit/sounds/snare.mp3');
            act="j";
            break;
        case 75:
            audio = new Audio('/Drum Kit/sounds/hihat.mp3');
            act="k";
            break;
        case 76:
            audio = new Audio('/Drum Kit/sounds/kick-bass.mp3');
            act="l";
            break;
        default:
            console.log(doc); 
            break;
    }
    buttonAnimation(act);
    audio.play();
});

const buttonAnimation = (curentKey)=>{
    let active = document.querySelector('.'+ curentKey)
    active.classList.add('pressed');
    setTimeout(() => {
        active.classList.remove('pressed');
      }, "2 second");      
};
