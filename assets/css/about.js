window.onscroll= function shadow(){
    if(document.documentElement.scrollTop>50){
        document.querySelector(".top").classList.add("down");
   }
  else{
        document.querySelector(".top").classList.remove("down");
    }

  }