let highestZ = 100;

function createWindow(title, content, width = 380, height = 220) {

    const win = document.createElement("div");

    win.className = "xp-window";

    win.style.width = width + "px";
    win.style.height = height + "px";

    win.style.left = Math.random() * 250 + 150 + "px";
    win.style.top = Math.random() * 120 + 80 + "px";

    win.style.zIndex = highestZ++;

    win.innerHTML = `
    
        <div class="xp-title">

            <span>${title}</span>

            <button class="close">✕</button>

        </div>

        <div class="xp-content">

            ${content}

        </div>

    `;

    document.body.appendChild(win);

    makeDraggable(win);

    win.onclick = () => {

        win.style.zIndex = highestZ++;

    };

    win.querySelector(".close").onclick = () => {

        win.remove();

    };

    return win;

}

function makeDraggable(win){

const title=win.querySelector(".xp-title");

let x=0;
let y=0;

title.onmousedown=(e)=>{

x=e.clientX;
y=e.clientY;

document.onmousemove=drag;
document.onmouseup=stop;

};

function drag(e){

const dx=x-e.clientX;
const dy=y-e.clientY;

x=e.clientX;
y=e.clientY;

win.style.left=(win.offsetLeft-dx)+"px";
win.style.top=(win.offsetTop-dy)+"px";

}

function stop(){

document.onmousemove=null;
document.onmouseup=null;

}

}
