// console.log(document)
// // document.body.style.backgroundColor = "red"

// const header = document.getElementById('header')

// console.log(header);

// const box = document.getElementsByClassName('box')

// console.log(box);

// for(let i =0;i<box.length;i++){
//     // console.log(box[i])
    
// }

const but = document.getElementsByClassName('btn')
console.log(but);

// document.addEventListener('mousemove', function(){
//     alert("piv piv 🔫🔫")
// })

// for(let i=0;i<=but.length;i++){
//     // console.log(but[i]);
//     but[i].addEventListener('click', () => {
//         alert("hello");
//     })
// }

// document.addEventListener('mousemove',function(event){
//     // console.log("x" + event.clientX + "y" + event.clientY)

//     event.target
// })

const btnX = document.getElementById('x')
const btnY = document.getElementById('y')

const box = document.getElementsByClassName("box")[0];

document.addEventListener('mousemove',function(event){
    btnX.innerHTML = "x = " + event.clientX
    btnY.innerHTML = "y=  " + event.clientY
    box.style.top = event.clientY +'px'
    box.style.left = event.clientX +'px'
})

