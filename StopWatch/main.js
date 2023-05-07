let startbtn =  document.getElementById('startStopBtn');
let restartbtn =  document.getElementById('resetBtn');
let time = document.getElementById('timer');

let horas = 0;
let minutos = 0;
let segundos = 0;


const watch = () =>{
    segundos++;
    if( segundos === 60){
        segundos=0;
        minutos++;
        if(minutos === 60){
            minutos=0;
            horas++;
        }
    }
    
    let horasimp = horas;
    let minimp = minutos;
    let secimp = segundos;
    if(horas<10){
        horasimp = '0'+ horas
    }
    if(minutos<10){
        minimp = '0'+ minutos
    }
    if(segundos<10){
        secimp = '0'+segundos
    }


    time.innerText=horasimp+':'+minimp+':'+secimp
}
let  statuswatch= false;
let timeactive=null;

startbtn.addEventListener("click", function(){
    if(statuswatch === false){
        timeactive = window.setInterval(watch, 1000);
        statuswatch=true;
        startbtn.innerHTML= '<i class="bi bi-pause-fill" id="pause"></i>';
    }
    else{
        statuswatch=false;
        window.clearInterval(timeactive);
        startbtn.innerHTML= '<i class="bi bi-play-fill" id="play"></i>';
    }
    
})

restartbtn.addEventListener("click",function(){
    window.clearInterval(timeactive);
    horas=0;
    minutos=0;
    segundos=0;
    startbtn.innerHTML= '<i class="bi bi-play-fill" id="play"></i>';
    time.innerText="00:00:00";
})  
