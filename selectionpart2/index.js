const box  = document.querySelectorAll(".box")
console.log(box)

const box1 = document.querySelectorAll('div')


box.forEach( e => console.log(e))

box.forEach(element => element.addEventListener('mouseover' ,function(){
    
    element.classList.add("fs-5")
    element.classList.add("text-primary")
}));

box.forEach(element => element.addEventListener('mouseout' ,function(){
    
    element.classList.remove("fs-5")
    element.classList.remove("text-primary")
}));


