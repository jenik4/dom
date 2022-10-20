const userInput = document.getElementById("userInput");
const send = document.getElementById("send");
const content = document.getElementById("content");

send.onclick = () => {
    changeColor(userInput.value);

}
const  changeColor = (color) => {
    const userValue = userInput.value;
    content.style.backgroundColor = color;

}
content.onmouseover = ()=> {
    changeColor(userInput.value);
}

window.onload = () =>{
    changeColor("pink");

}