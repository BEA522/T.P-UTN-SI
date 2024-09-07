const navChange=()=>{
    
    if(window.innerHeight*0.5 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
        
    }
    
}

let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");

const navChange=()=>{
    
    if(window.innerHeight*0.35 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")

    }
} 

let transformarTiempoActual=(tiempo)=>{
    if(tiempo<60){
        if(tiempo.toFixed(0)<10){
            return `00:0${tiempo.toFixed(0)}`
        }
        return `00:${tiempo.toFixed(0)}`
        //metodo toFixed(cant. decimales)
    }else{
        console.log(tiempo/60 )
        let minutos=parseInt(tiempo/60) //-> cantidad de minutos, solo tomo el valor entero
        let segundos= (tiempo/60 - minutos)*60
        if(segundos<10){
            return `${minutos}:0${segundos.toFixed(0)}`
        }
        return `${minutos}:${segundos.toFixed(0)}`
    }
    //
}
let timeProgression;

setTimeout(()=>{

    document.getElementById('showTime').innerHTML=` Duracion video  04:41`},100);



playBoton.addEventListener('click',()=>{
    video.play()
    timeProgression=setInterval(()=>{

    document.getElementById('showTime').innerHTML=`${transformarTiempoActual(video.currentTime)}`
},1000)
});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
    clearInterval(timeProgression)
});

function desplegar() {
    let submenu = document.querySelector(".tema");
    submenu.classList.toggle("tema-block")
}
function desptemaDia() {
    let body = document.querySelector("body");
    body.classList.remove()
    body.classList.add("body-day")
}
function temaNoche() {
    let body = document.querySelector("body");
    body.classList.remove()
    body.classList.add("body-night")
}


let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

const navChange=()=>{


    if(window.innerHeight*0.35 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")

    }
} 
function iniciar(){
    var imagenes=document.querySelectorAll('#cajaimagenes img');
    soltar=document.getElementById('cajasoltar');  
    soltar2  =document.getElementById('cajasoltar2'); 
    soltar3 = document.getElementById('cajasoltar3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        // imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
    e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++


}
function reinicio() {
    window.location.reload();
}
iniciar()

