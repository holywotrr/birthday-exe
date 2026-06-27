const boot = document.getElementById("bootScreen");
const login = document.getElementById("loginScreen");
const desktop = document.getElementById("desktop");

setTimeout(()=>{

boot.classList.add("hidden");

login.classList.remove("hidden");

},4200);

document.getElementById("loginButton").onclick=()=>{

const username=document.getElementById("username").value.trim();

if(username===""){

alert("Please enter your name!");

return;

}

localStorage.setItem("guestName",username);

login.classList.add("hidden");

desktop.classList.remove("hidden");

};

function updateClock(){

const now=new Date();

document.getElementById("clock").textContent=

now.toLocaleTimeString([],{

hour:'2-digit',

minute:'2-digit'

});

}

setInterval(updateClock,1000);

updateClock();

// ---------------- WINDOW SYSTEM ----------------

const container = document.getElementById("windowContainer");

let highestZ = 100;

function createWindow(title, html){

const win = document.createElement("div");

win.className="window";

win.style.left="250px";
win.style.top="120px";
win.style.zIndex=highestZ++;

win.innerHTML=`

<div class="window-title">

<span>${title}</span>

<button class="closeBtn">X</button>

</div>

<div class="window-body">

${html}

</div>

`;

container.appendChild(win);

makeDraggable(win);

win.querySelector(".closeBtn").onclick=()=>{

win.remove();

};

win.onclick=()=>{

win.style.zIndex=highestZ++;

};

return win;

}
