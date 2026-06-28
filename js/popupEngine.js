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
        "Birthday.exe cannot be deleted.",
        "Cake.dll has been installed.",
        "Friendship.exe is running in the background."
    ];

    let amount = 0;

    const interval = setInterval(() => {
        amount++;

        createWindow({
            id: "virus" + amount,
            title: "Windows Error",
            width: 330,
            height: 175,
            x: Math.random() * (window.innerWidth - 360),
            y: Math.random() * (window.innerHeight - 240),
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
            }, 1600);
        }
    }, 250);
}

function createSetupWizard() {
    const win = createWindow({
        id: "setup",
        title: "Birthday Setup Wizard",
        width: 540,
        height: 350,
        content: `
            <h2>Birthday.exe Setup Wizard</h2>

            <br>

            <p>Virus successfully removed.</p>

            <br>

            <p>
                One hidden program has been found:
                <b>Birthday Invitation.exe</b>
            </p>

            <br>

            <p>
                This wizard will install your invitation.
            </p>

            <br><br>

            <div style="text-align:right;">
                <button id="wizardNext">Install</button>
            </div>
        `
    });

    win.querySelector("#wizardNext").onclick = () => {
        closeAllWindows();
        createInstaller();
    };
}

function createInstaller() {
    const win = createWindow({
        id: "installer",
        title: "Installing Birthday Invitation.exe",
        width: 540,
        height: 280,
        content: `
            <h2>Installing Birthday Invitation.exe...</h2>

            <br>

            <div style="width:100%;height:24px;border:1px solid #777;background:white;">
                <div id="installBar" style="width:0%;height:100%;background:#2b87ff;transition:.1s;"></div>
            </div>

            <br>

            <p id="installText">Preparing invitation files...</p>
        `
    });

    const bar = win.querySelector("#installBar");
    const text = win.querySelector("#installText");

    let percent = 0;

    const interval = setInterval(() => {
        percent += 2;
        bar.style.width = percent + "%";

        if (percent > 20) text.innerText = "Copying invitation details...";
        if (percent > 45) text.innerText = "Adding cake.exe...";
        if (percent > 70) text.innerText = "Loading guest permissions...";
        if (percent > 90) text.innerText = "Creating shortcut...";

        if (percent >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                win.remove();
                createInvitationInstalledWindow();
            }, 700);
        }
    }, 80);
}

function createInvitationInstalledWindow() {
    const win = createWindow({
        id: "installed",
        title: "Installation Complete",
        width: 520,
        height: 300,
        content: `
            <h2>Installation Complete</h2>

            <br>

            <p>
                <b>Birthday Invitation.exe</b> has been installed successfully.
            </p>

            <br>

            <p>
                Open the program to view your invitation.
            </p>

            <br><br>

            <div style="text-align:right;">
                <button id="openInviteBtn">Open Birthday Invitation.exe</button>
            </div>
        `
    });

    win.querySelector("#openInviteBtn").onclick = () => {
        closeAllWindows();
        createBirthdayInvitation();
    };
}

function createBirthdayInvitation() {
    const guestName = localStorage.getItem("guestName") || "Guest";

    createWindow({
        id: "birthdayInvite",
        title: "Birthday Invitation.exe",
        width: 650,
        height: 460,
        content: `
            <div style="text-align:center;">
                <h1>💌 YOU'RE INVITED!</h1>

                <br>

                <p>
                    Hello <b>${guestName}</b>!
                </p>

                <br>

                <p>
                    You survived Birthday.exe, so now you're officially invited to my birthday.
                </p>

                <br>

                <div style="text-align:left;display:inline-block;line-height:1.9;">
                    <p><b>📅 Date:</b> July 21, 2026</p>
                    <p><b>🕕 Time:</b> 6:00 PM - 10:00 PM / until closing</p>
                    <p><b>🎮 Theme:</b> Old Windows Virus</p>
                    <p><b>📍 Location:</b> TBA</p>
                </div>

                <br><br>

                <button id="acceptBtn">I'll Be There!</button>
                <button id="maybeBtn">Maybe</button>
            </div>
        `
    });

    document.getElementById("acceptBtn").onclick = () => {
        spawnYippiePopups();
       
       const partyAudio = document.getElementById("partySound");
       partyAudio?.play().catch(() => {});

       alert("RSVP saved: I'll be there! 🎉");
       
    };

    document.getElementById("maybeBtn").onclick = () => {
        alert("RSVP saved: Maybe 👀");
    };
}

function spawnYippiePopups() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createWindow({
                title: "YIPPIE!!!",
                width: 300,
                height: 260,
                x: Math.random() * (window.innerWidth - 330),
                y: Math.random() * (window.innerHeight - 330),
                content: `
                    <div style="text-align:center;">
                        <img
                            src="assets/images/yippie.gif"
                            style="width:220px;height:auto;"
                            alt="Yippie">
                        <br><br>
                        <b>RSVP installed successfully!</b>
                    </div>
                `
            });
        }, i * 180);
    }

    const partyAudio = document.getElementById("partySound");
    partyAudio?.play().catch(() => {});
}
