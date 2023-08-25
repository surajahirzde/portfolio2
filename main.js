var nav=document.querySelector(".navigation");

function sl(){
nav.classList.add("c")
}


function jl(){

nav.classList.remove("c");

}

// dark and light mode

function theme(color){
  
document.body.style.background = color;

if(color == '#333'){
    document.getElementById("dark").style.background="black";
    
    document.getElementById("h").style.color="white";
    document.getElementById("a").style.color="white";
    document.getElementById("s").style.color="white";
    document.getElementById("ss").style.color="white";
    document.getElementById("cc").style.color="white";
    document.getElementById("abo").style.color="white";
    document.getElementById("sk").style.color="white";
    document.getElementById("in").style.color="white";  
    document.getElementById("in2").style.color="white";
    document.getElementById("in3").style.color="white";
document.getElementById("mo").style.color="white";
document.getElementById("nm").style.color="white";
document.getElementById("u").style.color="brown";
document.getElementById("w").style.color="brown";
    document.getElementById("he").style.color="brown";
    document.getElementById("con-uss").style.background="#333";


}
else{
    document.getElementById("dark").style.background="#333";
    document.getElementById("h").style.color="#0e2431";
    document.getElementById("a").style.color="#0e2431";
    document.getElementById("s").style.color="#0e2431";
    document.getElementById("ss").style.color="#0e2431";
    document.getElementById("cc").style.color="#0e2431";
     document.getElementById("he").style.color="#0e2431";
    document.getElementById("sk").style.color="#0e2431";
    document.getElementById("abo").style.color="#0e2431";

    document.getElementById("in").style.color="#777";  
    document.getElementById("in2").style.color="#777";
    document.getElementById("u").style.color="#0e2431";
    document.getElementById("w").style.color="#0e2431";
    document.getElementById("in3").style.color="#777";
    document.getElementById("mo").style.color="#0e2431";
document.getElementById("nm").style.color="#0e2431";
document.getElementById("con-uss").style.background="var(--line-color)";
}

}
// service
AOS.init();