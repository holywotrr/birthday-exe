const boot=document.getElementById("boot");
const login=document.getElementById("login");
const desktop=document.getElementById("desktop");

setTimeout(()=>{

boot.style.display="none";

login.hidden=false;
login.style.display="flex";

},4000);

document
.getElementById("loginBtn")
.onclick=()=>{

const username=
document.getElementById("username").value.trim();

if(username===""){

alert("Enter your name!");

return;

}

localStorage.setItem(
"guest",
username
);

login.style.display="none";

desktop.hidden=false;

desktop.style.display="block";

updateClock();

setInterval(updateClock,1000);

};

function updateClock(){

const now=new Date();

document
.getElementById("clock")
.innerHTML=

now.toLocaleTimeString([],{

hour:"2-digit",

minute:"2-digit"

});

}

document
.getElementById("birthday")
.ondblclick = () => {

createWindow(

"Birthday.exe",

`

<h3>Hello ${localStorage.getItem("guest")}!</h3>

<p>

You have received
one new invitation.

</p>

<br>

<button id="openInvite">

Open

</button>

`

);

};
