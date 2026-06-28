/* ==========================================
   Birthday.exe
   Main Controller
========================================== */

const bootScreen = document.getElementById("bootScreen");
const loginScreen = document.getElementById("loginScreen");
const desktop = document.getElementById("desktop");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

const birthdayIcon = document.getElementById("birthdayIcon");
const birthdayLabel = document.getElementById("birthdayLabel");
const clock = document.getElementById("clock");

const startupSound = document.getElementById("startupSound");
const clickSound = document.getElementById("clickSound");

let clockInterval = null;

window.addEventListener("load", () => {
    setTimeout(() => {
        bootScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");
    }, 3500);
});

loginButton.addEventListener("click", login);
usernameInput.addEventListener("keydown", e => { if (e.key === "Enter") login(); });
passwordInput.addEventListener("keydown", e => { if (e.key === "Enter") login(); });

function login() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const correctPassword = "YURI";

    if (!username) return alert("Please enter your name.");

    if (password !== correctPassword) {
        alert("Incorrect password.");
        passwordInput.value = "";
        passwordInput.focus();
        return;
    }

    localStorage.setItem("guestName", username);
    birthdayLabel.textContent = `${username}'s Invitation.exe`;

    loginScreen.classList.add("hidden");
    showWelcomeScreen(username);
}

function showWelcomeScreen(username) {
    const overlay = document.createElement("div");

    overlay.innerHTML = `
        <div class="welcome-box">
            <div class="welcome-title">Welcome, ${username}</div>
            <img class="welcome-loader" src="https://media.tenor.com/ggWF2p1Xu_IAAAAj/loading-windows.gif" alt="Loading">
        </div>
    `;

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "#245EDB";
    overlay.style.color = "white";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.fontFamily = "Tahoma, Verdana, sans-serif";
    overlay.style.zIndex = "99999";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 1s ease";

    document.body.appendChild(overlay);

    setTimeout(() => overlay.style.opacity = "1", 50);

    setTimeout(() => {
        overlay.style.opacity = "0";

        setTimeout(() => {
            overlay.remove();

            desktop.classList.remove("hidden");
            desktop.style.opacity = "0";
            desktop.style.transition = "opacity 1s ease";

            if (startupSound) startupSound.play().catch(() => {});
            startClock();

            setTimeout(() => desktop.style.opacity = "1", 50);
        }, 1000);
    }, 2600);
}

function startClock() {
    updateClock();
    if (clockInterval) clearInterval(clockInterval);
    clockInterval = setInterval(updateClock, 1000);
}

function updateClock() {
    clock.textContent = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}

birthdayIcon.addEventListener("dblclick", () => {
    if (clickSound) clickSound.play().catch(() => {});
    openBirthdayWindow();
});

document.querySelectorAll(".icon").forEach(icon => {
    const label = icon.querySelector("p");
    if (!label) return;

    const text = label.textContent.trim();

    if (text === "My Documents") {
        icon.addEventListener("dblclick", openMyDocuments);
    }

    if (text === "Recycle Bin") {
        icon.addEventListener("dblclick", openRecycleBin);
    }
});

function openMyDocuments() {
    createWindow({
        title: "My Documents",
        width: 560,
        height: 360,
        content: `
            <h3>My Documents</h3>
            <br>
            <div style="display:flex;gap:35px;text-align:center;">
                <div onclick="openCollegeFolder()" style="cursor:pointer;">
                    <div style="font-size:42px;">📁</div>
                    <p>College Stuff</p>
                </div>

                <div onclick="openPersonalFolder()" style="cursor:pointer;">
                    <div style="font-size:42px;">📁</div>
                    <p>Personal</p>
                </div>

                <div onclick="openXXXFolder()" style="cursor:pointer;">
                    <div style="font-size:42px;">📁</div>
                    <p>xxx</p>
                </div>
            </div>
        `
    });
}

function openCollegeFolder() {
    createWindow({
        title: "College Stuff",
        width: 380,
        height: 220,
        content: `<p>School's next month gangalang &lt;3</p>`
    });
}

function openPersonalFolder() {
    createWindow({
        title: "Personal",
        width: 380,
        height: 220,
        content: `<p>Nunya business... I like girls</p>`
    });
}

function openXXXFolder() {
    const loadingWin = createWindow({
        title: "xxx",
        width: 360,
        height: 180,
        content: `
            <div style="text-align:center;">
                <h3>Loading...</h3>
                <br>
                <p>Opening folder contents...</p>
            </div>
        `
    });

    setTimeout(() => {
        loadingWin.remove();

        createWindow({
            title: "xxx",
            width: 450,
            height: 430,
            content: `
                <div style="text-align:center;">
                    <img src="assets/images/sideeye.png" style="width:280px;border-radius:6px;" alt="Side eye">
                    <br><br>
                    <h3>gang...</h3>
                    <p>Watchu looking at?</p>
                </div>
            `
        });
    }, 1200);
}

function openRecycleBin() {
    createWindow({
        title: "Recycle Bin",
        width: 560,
        height: 350,
        content: `
            <h3>Recycle Bin</h3>
            <br>
            <div style="display:flex;gap:35px;text-align:center;flex-wrap:wrap;">
                <div onclick="openTrashFile('men')" style="cursor:pointer;">
                    <div style="font-size:42px;">🗑️</div>
                    <p>men.txt</p>
                </div>

                <div onclick="openTrashFile('trump')" style="cursor:pointer;">
                    <div style="font-size:42px;">🗑️</div>
                    <p>trump.txt</p>
                </div>

                <div onclick="openTrashFile('gojo')" style="cursor:pointer;">
                    <div style="font-size:42px;">🗑️</div>
                    <p>gojo.txt</p>
                </div>
            </div>
        `
    });
}

function openTrashFile(type) {
    const jokes = {
        men: "File deleted for emotional safety.",
        trump: "File deleted by public demand.",
        gojo: "File deleted... but somehow still came back."
    };

    createWindow({
        title: type + ".txt",
        width: 380,
        height: 210,
        content: `
            <p><b>Status:</b> Could not restore file.</p>
            <br>
            <p><b>Reason:</b> ${jokes[type]}</p>
        `
    });
}

function openBirthdayWindow() {
    createWindow({
        id: "birthday",
        title: "Birthday.exe",
        width: 480,
        height: 320,
        content: `
            <h2>Welcome!</h2>
            <p>You have received one new invitation.</p>
            <br>
            <div style="text-align:right;">
                <button id="continueButton">Continue</button>
            </div>
        `
    });

    setTimeout(() => {
        const btn = document.getElementById("continueButton");
        if (!btn) return;

        btn.onclick = () => {
            btn.disabled = true;
            btn.innerText = "Loading...";

            setTimeout(() => {
                closeAllWindows();

                if (typeof createVirusPopup === "function") {
                    createVirusPopup();
                } else {
                    alert("popupEngine.js is missing.");
                }
            }, 2500);
        };
    }, 50);
}
