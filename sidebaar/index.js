const btn = document.querySelector(".btn-toggle")
const sidebar = document.querySelector(".sidebar")
let ishow = false
btn.addEventListener('click',function(){
    sidebar.style.width= !ishow ? "0px" : "250px"
    ishow = !ishow
})
