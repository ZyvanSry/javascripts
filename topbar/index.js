const btn = document.querySelector(".btn")
const topbar = document.querySelector(".topbar")
let isshow = false
btn.addEventListener('click', function(){
    topbar.style.height= !isshow ? "300px" : "0px"
    isshow = !isshow
})
