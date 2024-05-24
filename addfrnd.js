
 var istatus = document.querySelector("h5")

 var btn= document.querySelector("#add")
 var check =0


 btn.addEventListener("click",function(){
    if( check==0){
   istatus.innerText="friends"
    istatus.style.color="green"
    check=1
    btn.innerHTML= "remove friend"
}
else{
   
        istatus.innerText="stranger"
         istatus.style.color="red"
         check=0 
         btn.innerHTML="add friend"
}
 })
