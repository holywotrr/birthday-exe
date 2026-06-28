/* ==========================================
   Birthday.exe
   Main Controller
========================================== */

const bootScreen = document.getElementById("bootScreen");
const loginScreen = document.getElementById("loginScreen");
const desktop = document.getElementById("desktop");

const loginButton = document.getElementById("loginButton");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const birthdayLabel = document.getElementById("birthdayLabel");

const clock = document.getElementById("clock");

const startupSound = document.getElementById("startupSound");
const clickSound = document.getElementById("clickSound");

/* ==========================================
   Boot Sequence
========================================== */

window.addEventListener("load", () => {
    setTimeout(() => {
        bootScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");
    }, 4000);
});

/* ==========================================
   Login
========================================== */

loginButton.addEventListener("click", login);

usernameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") login();
});

passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") login();
});

function login() {

    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("guestName", username);

    if (startupSound) {
        startupSound.play().catch(() => {});
    }

    loginScreen.classList.add("hidden");
    desktop.classList.remove("hidden");

    birthdayLabel.textContent = `${username}'s Invitation.exe`;

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
        hour: "2-digit",
        minute: "2-digit"
    });

}

/* ==========================================
   Desktop Icon
========================================== */

const birthdayIcon = document.getElementById("birthdayIcon");

birthdayIcon.addEventListener("dblclick", () => {

    if (clickSound) {
        clickSound.play().catch(() => {});
    }

    openBirthdayWindow();

});

/* ==========================================
   Birthday Window
========================================== */

function openBirthdayWindow() {

    createWindow({

        id: "birthday",

        title: "Birthday.exe",

        width: 460,

        height: 300,

        content: `
            <h2>Welcome!</h2>

            <br>

            <p>
                You have received one new invitation.
            </p>

            <br>

            <p>
                Click Continue to continue.
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
                    alert("popupEngine.js is not loaded.");
                }

            }, 3000);

        };

    }, 50);

}/* ==========================================
   Birthday.exe
   Main Controller
========================================== */

const bootScreen = document.getElementById("bootScreen");
const loginScreen = document.getElementById("loginScreen");
const desktop = document.getElementById("desktop");

const loginButton = document.getElementById("loginButton");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const birthdayLabel = document.getElementById("birthdayLabel");

const clock = document.getElementById("clock");

const startupSound = document.getElementById("startupSound");
const clickSound = document.getElementById("clickSound");

/* ==========================================
   Boot Sequence
========================================== */

window.addEventListener("load", () => {
    setTimeout(() => {
        bootScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");
    }, 4000);
});

/* ==========================================
   Login
========================================== */

loginButton.addEventListener("click", login);

usernameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") login();
});

passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") login();
});

function login() {

    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("guestName", username);

    if (startupSound) {
        startupSound.play().catch(() => {});
    }

    loginScreen.classList.add("hidden");
    desktop.classList.remove("hidden");

    birthdayLabel.textContent = `${username}'s Invitation.exe`;

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
        hour: "2-digit",
        minute: "2-digit"
    });

}

/* ==========================================
   Desktop Icon
========================================== */

const birthdayIcon = document.getElementById("birthdayIcon");

birthdayIcon.addEventListener("dblclick", () => {

    if (clickSound) {
        clickSound.play().catch(() => {});
    }

    openBirthdayWindow();

});

/* ==========================================
   Birthday Window
========================================== */

function openBirthdayWindow() {

    createWindow({

        id: "birthday",

        title: "Birthday.exe",

        width: 460,

        height: 300,

        content: `
            <h2>Welcome!</h2>

            <br>

            <p>
                You have received one new invitation.
            </p>

            <br>

            <p>
                Click Continue to continue.
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
                    alert("popupEngine.js is not loaded.");
                }

            }, 3000);

        };

    }, 50);

}
