/* ==========================================
   Birthday.exe
   Main Controller
========================================== */

// Screens
const bootScreen = document.getElementById("bootScreen");
const loginScreen = document.getElementById("loginScreen");
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

/* ==========================================
   Boot
========================================== */

window.addEventListener("load", boot);

function boot() {

    setTimeout(() => {

        bootScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");

    }, 3500);

}

/* ==========================================
   Login
========================================== */

loginButton.addEventListener("click", login);

usernameInput.addEventListener("keydown", e => {
    if (e.key === "Enter") login();
});

passwordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") login();
});

function login() {

    const username = usernameInput.value.trim();

    if (username.length === 0) {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("guestName", username);

    startupSound?.play().catch(() => {});

    birthdayLabel.textContent = `${username}'s Invitation.exe`;

    loginScreen.classList.add("hidden");
    desktop.classList.remove("hidden");

    startClock();

}

/* ==========================================
   Clock
========================================== */

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);

}

function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });

}

/* ==========================================
   Desktop Icon
========================================== */

birthdayIcon.addEventListener("dblclick", () => {

    clickSound?.play().catch(() => {});

    openBirthdayWindow();

});

/* ==========================================
   Invitation Window
========================================== */

function openBirthdayWindow() {

    createWindow({

        id: "birthday",

        title: "Birthday.exe",

        width: 480,

        height: 320,

        content: `

        <h2>Welcome!</h2>

        <p>
        You have received one new invitation.
        </p>

        <br>

        <div style="text-align:right;">

            <button id="continueButton">
                Continue
            </button>

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
