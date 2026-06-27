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
