/* ==========================================
   Birthday.exe
   Popup Engine
========================================== */

function createVirusPopup() {
    const messages = [
        "A fatal exception has occurred.",
        "System32 has been corrupted.",
        "Virus detected.",
        "Memory access violation.",
        "Windows encountered a problem.",
        "Birthday.exe cannot be deleted.",
        "Cake.dll has been installed."
    ];

    let amount = 0;

    const interval = setInterval(() => {
        amount++;

        createWindow({
            id: "virus" + amount,
            title: "Windows Error",
            width: 320,
            height: 170,
            x: Math.random() * (window.innerWidth - 340),
            y: Math.random() * (window.innerHeight - 220),
            content: `
                <div style="display:flex;gap:12px;align-items:flex-start;">
                    <div style="font-size:34px;">⚠</div>
                    <div>
                        <b>Error</b>
                        <br><br>
                        ${messages[Math.floor(Math.random() * messages.length)]}
                    </div>
                </div>

                <br>

                <div style="text-align:right;">
                    <button onclick="this.closest('.xpWindow').remove()">OK</button>
                </div>
            `
        });

        document.getElementById("errorSound")?.play().catch(() => {});

        if (amount >= 10) {
            clearInterval(interval);

            setTimeout(() => {
                closeAllWindows();
                createSetupWizard();
            }, 2000);
        }
    }, 250);
}

function createSetupWizard() {
    const win = createWindow({
        id: "setup",
        title: "Birthday Setup Wizard",
        width: 520,
        height: 340,
        content: `
            <h2>Setup Complete</h2>

            <br>

            <p>Virus successfully removed.</p>

            <br>

            <p>One surprise has been found on this computer.</p>

            <br><br>

            <div style="text-align:right;">
                <button id="wizardNext">Continue</button>
            </div>
        `
    });

    const btn = win.querySelector("#wizardNext");

    btn.onclick = () => {
        closeAllWindows();
        createInstaller();
    };
}

function createInstaller() {
    const win = createWindow({
        id: "installer",
        title: "Birthday Setup",
        width: 520,
        height: 260,
        content: `
            <h2>Installing Birthday Components...</h2>

            <br>

            <div style="width:100%;height:24px;border:1px solid #777;background:white;">
                <div id="installBar" style="width:0%;height:100%;background:#2b87ff;transition:.1s;"></div>
            </div>

            <br>

            <p id="installText">Preparing files...</p>
        `
    });

    const bar = win.querySelector("#installBar");
    const text = win.querySelector("#installText");

    let percent = 0;

    const interval = setInterval(() => {
        percent += 2;
        bar.style.width = percent + "%";

        if (percent > 20) text.innerText = "Copying memories...";
        if (percent > 45) text.innerText = "Wrapping presents...";
        if (percent > 70) text.innerText = "Adding cake...";
        if (percent > 90) text.innerText = "Almost ready...";

        if (percent >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                win.remove();
                createBirthdayWindow();
            }, 700);
        }
    }, 80);
}

function createBirthdayWindow() {
    createWindow({
        id: "birthdayFinal",
        title: "Happy Birthday!",
        width: 620,
        height: 420,
        content: `
            <div style="text-align:center;">
                <h1>🎉 YOU'RE INVITED! 🎉</h1>

                <br>

                <h2>Birthday.exe installed successfully.</h2>

                <br>

                <p><b>Date:</b> July 21, 2026</p>
                <p><b>Time:</b> 6:00 PM - 10:00 PM or until the place closes</p>
                <p><b>Theme:</b> Old Windows Virus</p>

                <br>

                <p>Hope you can make it!</p>

                <br>

                <button id="acceptBtn">Install Attendance</button>
            </div>
        `
    });

    const btn = document.getElementById("acceptBtn");

    btn.onclick = () => {
        alert("Attendance installed successfully 🎉");
    };
}
