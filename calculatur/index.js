let command = "";
const show = document.querySelector('.show');

const state = (n) => {
    if (n !== '=') {
        command +=n;
    } else{
        command = eval(command);
    }
   
   
    show.innerHTML = command
}