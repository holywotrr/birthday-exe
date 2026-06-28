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

                    <div style="font-size:34px;">
                        ⚠
                    </div>

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

        const sound = document.getElementById("errorSound");

        sound?.play().catch(()=>{});

        if(amount >= 10){

            clearInterval(interval);

            setTimeout(() => {

                closeAllWindows();

                createSetupWizard();

            },2000);

        }

    },250);

}
