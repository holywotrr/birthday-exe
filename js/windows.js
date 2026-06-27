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
