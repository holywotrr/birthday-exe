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
        "Windows encountered a problem."

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

                        ${messages[Math.floor(Math.random()*messages.length)]}

                    </div>

                </div>

                <br>

                <div style="text-align:right;">

                    <button onclick="this.closest('.xpWindow').remove()">

                        OK

                    </button>

                </div>

            `

        });

        document
            .getElementById("errorSound")
            ?.play()
            .catch(() => {});

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

    createWindow({

        id: "setup",

        title: "Birthday Setup Wizard",

        width: 520,

        height: 340,

        content: `

            <h2>Setup Complete</h2>

            <br>

            <p>
                Virus successfully removed.
            </p>

            <br>

            <p>
                One surprise has been found on this computer.
            </p>

            <br><br>

            <div style="text-align:right;">

                <button id="wizardNext">

                    Continue

                </button>

            </div>

        `

    });

    setTimeout(() => {

        const btn = document.getElementById("wizardNext");

        if (!btn) return;

        btn.onclick = () => {

            alert("Birthday invitation coming next 👀");

        };

    }, 50);

}
