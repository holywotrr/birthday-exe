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
    birthdayLabel.textContent = `${username}'s Invitation.exe`;

    loginScreen.classList.add("hidden");

    showWelcomeScreen(username);
}

/* Welcome Screen */

function showWelcomeScreen(username) {
    const overlay = document.createElement("div");

    overlay.innerHTML = `
        <div class="welcome-box">
            <div class="welcome-title">Welcome, ${username}</div>
            <div class="welcome-dots">● ● ●</div>
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

    setTimeout(() => {
        overlay.style.opacity = "1";
    }, 50);

    setTimeout(() => {
        overlay.style.opacity = "0";

        setTimeout(() => {
            overlay.remove();

            desktop.classList.remove("hidden");
            desktop.style.opacity = "0";
            desktop.style.transition = "opacity 1s ease";

            if (startupSound) {
                startupSound.play().catch(() => {});
            }

            startClock();

            setTimeout(() => {
                desktop.style.opacity = "1";
            }, 50);

        }, 1000);

    }, 2600);
}

/* Clock */

function startClock() {
    updateClock();

    if (clockInterval) {
        clearInterval(clockInterval);
    }

    clockInterval = setInterval(updateClock, 1000);
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
    if (clickSound) {
        clickSound.play().catch(() => {});
    }

    openBirthdayWindow();
});

/* Birthday Window */

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
