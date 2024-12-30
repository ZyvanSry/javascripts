const side = document.querySelector('.sidebar')
const btn = document.querySelector('.btn')
const toggle = document.querySelector('#toggle')
let isopen = false

btn.addEventListener('click',function(){
    if(isopen == false){
        toggle.classList.remove('fa-bars')
        toggle.classList.add('fa-xmark')
    }
    else{
        toggle.classList.remove('fa-xmark')
        toggle.classList.add('fa-bars')
       
    }
    side.style.width = !isopen ? "250px" : "0px"
    btn.style.left = !isopen ? "250px" : "0px" 
    isopen = !isopen
})

document.addEventListener('click',function(e){
    if (e.clientX > 260){
    side.style.width = "0px"
    btn.style.left = "0px"
    }
})