/* =====================================
   Birthday.exe
   Window Engine
===================================== */

let highestZ = 100;

function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

function createWindow({
    id = "",
    title = "Window",
    width = 420,
    height = 280,
    x = null,
    y = null,
    random = false,
    content = ""
}) {
    const layer = document.getElementById("windowLayer");

    if (!layer) {
        console.error("windowLayer not found.");
        return null;
    }

    const isMobile = window.innerWidth <= 700;

    if (isMobile) {
        width = Math.min(width, window.innerWidth * 0.92);
        height = Math.min(height, window.innerHeight * 0.76);
    }

    if (random) {
        const maxX = Math.max(8, window.innerWidth - width - 8);
        const maxY = Math.max(8, window.innerHeight - height - 48);

        if (x === null) x = Math.random() * maxX;
        if (y === null) y = Math.random() * maxY;
    } else {
        if (x === null) x = (window.innerWidth - width) / 2;
        if (y === null) y = (window.innerHeight - height) / 2 - 20;
    }

    x = clamp(x, 8, Math.max(8, window.innerWidth - width - 8));
    y = clamp(y, 8, Math.max(8, window.innerHeight - height - 48));

    const win = document.createElement("div");
    win.className = "xpWindow";

    if (id) win.id = id;

    win.style.width = width + "px";
    win.style.height = height + "px";
    win.style.left = x + "px";
    win.style.top = y + "px";
    win.style.zIndex = highestZ++;

    win.innerHTML = `
        <div class="windowTitle">
            <div class="windowText">${title}</div>
            <div class="windowButtons">
                <button class="windowClose">✕</button>
            </div>
        </div>

        <div class="windowBody">
            ${content}
        </div>
    `;

    layer.appendChild(win);

    makeDraggable(win);

    win.addEventListener("mousedown", () => bringToFront(win));
    win.addEventListener("touchstart", () => bringToFront(win), { passive: true });

    const closeBtn = win.querySelector(".windowClose");
    closeBtn.onclick = () => win.remove();

    return win;
}

function bringToFront(win) {
    win.style.zIndex = highestZ++;
}

function makeDraggable(win) {
    if (window.innerWidth <= 700) return;

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

function closeAllWindows() {
    document.querySelectorAll(".xpWindow").forEach(win => win.remove());
}
