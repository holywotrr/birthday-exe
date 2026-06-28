/* ==========================================
   Birthday.exe
   Main Controller
========================================== */

// Screens
const bootScreen = document.getElementById("bootScreen");
const loginScreen = document.getElementById("loginScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const welcomeText = document.getElementById("welcomeText");
const desktop = document.getElementById("desktop");

// Login
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

// Desktop
const birthdayIcon = document.getElementById("birthdayIcon");
const birthdayLabel = document.getElementById("birthdayLabel");
const clock = document.getElementById("clock");

// Sounds
const startupSound = document.getElementById("startupSound");
const clickSound = document.getElementById("clickSound");

/* Boot */

window.addEventListener("load", () => {
    setTimeout(() => {
        bootScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");
    }, 3500);
});

/* Login */

loginButton.addEventListener("click", login);

usernameInput.addEventListener("keydown", e => {
    if (e.key === "Enter") login();
});

passwordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") login();
});

function login() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const correctPassword = "YURI";

    if (!username) {
        alert("Please enter your name.");
        return;
    }

    if (password !== correctPassword) {
        alert("Incorrect password.");
        passwordInput.value = "";
        passwordInput.focus();
        return;
    }

    localStorage.setItem("guestName", username);

   loginScreen.classList.add("hidden");
desktop.classList.remove("hidden");

startupSound?.play().catch(() => {});
startClock();

const overlay = document.createElement("div");
overlay.innerText = `Welcome, ${username}`;
overlay.style.position = "fixed";
overlay.style.inset = "0";
overlay.style.background = "#245EDB";
overlay.style.color = "white";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.fontSize = "44px";
overlay.style.fontWeight = "bold";
overlay.style.fontFamily = "Tahoma, Verdana, sans-serif";
overlay.style.zIndex = "99999";
overlay.style.textShadow = "2px 2px 4px black";

document.body.appendChild(overlay);

setTimeout(() => {
    overlay.remove();
}, 2200);
   
}

/* Clock */

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    clock.textContent = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}

/* Desktop Icon */

birthdayIcon.addEventListener("dblclick", () => {
    clickSound?.play().catch(() => {});
    openBirthdayWindow();
});

/* Invitation Window */

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
