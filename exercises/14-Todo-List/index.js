// Your code here
let entrada = document.getElementById("addToDo");
entrada.addEventListener('change',function(){
    
    let elem = document.createElement("LI");
    
    let elem2 = document.createElement("SPAN");
    let elem3 = document.createElement("i");
    
    elem3.classList.value="fa fa-trash";
    elem2.appendChild(elem3);
    elem.appendChild(elem2);
    elem.append(" "+entrada.value);
    document.querySelector("ul").append(elem);
    entrada.value="";   
})

let icon = document.querySelectorAll("i");
icon.addEventListener('click',function(){
    console.log("funciona");
})

