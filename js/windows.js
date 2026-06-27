/* =====================================
   Birthday.exe
   Window Engine
===================================== */

let highestZ = 100;

/* Create a Window */

function createWindow({

    id = "",
    title = "Window",
    width = 420,
    height = 280,
    content = ""

}){

    const layer = document.getElementById("windowLayer");

    const win = document.createElement("div");

    win.className = "xpWindow";

    if(id) win.id = id;

    win.style.width = width + "px";
    win.style.height = height + "px";

    win.style.left = (window.innerWidth/2-width/2)+"px";
    win.style.top = (window.innerHeight/2-height/2-40)+"px";

    win.style.zIndex = highestZ++;

    win.innerHTML = `

<div class="windowTitle">

<div class="windowText">

${title}

</div>

<div class="windowButtons">

<button class="windowClose">

✕

</button>

</div>

</div>

<div class="windowBody">

${content}

</div>

`;

    layer.appendChild(win);

    makeDraggable(win);

    win.addEventListener("mousedown",()=>{

        bringToFront(win);

    });

    win
    .querySelector(".windowClose")
    .onclick=()=>{

        win.remove();

    };

    return win;

}

/* ========================= */

function bringToFront(win){

    win.style.zIndex = highestZ++;

}

/* ========================= */

function makeDraggable(win){

    const title = win.querySelector(".windowTitle");

    let offsetX = 0;
    let offsetY = 0;

    let dragging = false;

    title.addEventListener("mousedown",(e)=>{

        dragging = true;

        offsetX =
        e.clientX-win.offsetLeft;

        offsetY =
        e.clientY-win.offsetTop;

        bringToFront(win);

    });

    document.addEventListener("mousemove",(e)=>{

        if(!dragging) return;

        win.style.left =
        e.clientX-offsetX+"px";

        win.style.top =
        e.clientY-offsetY+"px";

    });

    document.addEventListener("mouseup",()=>{

        dragging=false;

    });

}

/* ========================= */

function closeAllWindows(){

    document
    .querySelectorAll(".xpWindow")
    .forEach(win=>{

        win.remove();

    });

}
