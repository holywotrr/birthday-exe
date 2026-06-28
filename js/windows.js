/* =====================================
   Birthday.exe
   Window Engine
===================================== */

let highestZ = 100;

/* =========================
   Create Window
========================= */

function createWindow({

    id = "",
    title = "Window",
    width = 420,
    height = 280,
    x = null,
    y = null,
    content = ""

}) {

    const layer = document.getElementById("windowLayer");

    if (!layer) {
        console.error("windowLayer not found.");
        return;
    }

    const win = document.createElement("div");

    win.className = "xpWindow";

    if (id) {
        win.id = id;
    }

    win.style.width = width + "px";
    win.style.height = height + "px";

    if (x === null) {
        x = (window.innerWidth - width) / 2;
    }

    if (y === null) {
        y = (window.innerHeight - height) / 2 - 30;
    }

    win.style.left = x + "px";
    win.style.top = y + "px";

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

    win.addEventListener("mousedown", () => {
        bringToFront(win);
    });

    win.querySelector(".windowClose").onclick = () => {
        win.remove();
    };

    return win;

}

/* =========================
   Bring To Front
========================= */

function bringToFront(win) {

    win.style.zIndex = highestZ++;

}

/* =========================
   Draggable Windows
========================= */

function makeDraggable(win) {

    const title = win.querySelector(".windowTitle");

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    title.addEventListener("mousedown", (e) => {

        dragging = true;

        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;

        bringToFront(win);

    });

    document.addEventListener("mousemove", (e) => {

        if (!dragging) return;

        win.style.left = (e.clientX - offsetX) + "px";
        win.style.top = (e.clientY - offsetY) + "px";

    });

    document.addEventListener("mouseup", () => {

        dragging = false;

    });

}

/* =========================
   Close All Windows
========================= */

function closeAllWindows() {

    document.querySelectorAll(".xpWindow").forEach(win => {

        win.remove();

    });

}
