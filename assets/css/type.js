const type = " AJITH WORKING AT VILLUPURAM";
var startingletter = 0; 
var length = type.length;
var speed = 90;
function typewriter(){
  document.querySelector("#ajith").innerHTML = type.substring(0,startingletter );
if(startingletter != type.length){
  if(startingletter ++ != type.length){
    setTimeout(typewriter, speed);
  }
}
else{
  typewriter1()
}    
}
function typewriter1(){
    document.querySelector("#ajith").innerHTML = type.substring(0, startingletter ) + '<span>\u25AE</span>';
  
if(startingletter != 0){
if(--startingletter!= type.length)
  setTimeout(typewriter1, speed);
}
else{
    typewriter()
}
}

window.addEventListener("load", typewriter)   


function open(){
  window.open('mailto:ajithk.tcz@gmail.com?subject=subject&body=body');
}