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
});

// let li = document.querySelectorAll("li");
// let icon = document.getElementsByClassName("fa fa-trash");
// for(let i=0;i<icon.length;i++)
// {
//     icon[i].addEventListener("click",function(){
//         let list = document.querySelector("ul");
//         list.removeChild(li[i]);
//     });
// }

document.addEventListener('click',function(e){
    if(e.target.className === 'fa fa-trash')
    {
        console.log(e);
        e.target.parentNode.parentNode.remove();
    }
})

;
