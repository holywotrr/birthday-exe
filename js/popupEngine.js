/* ==========================================
    Birthday.exe
    Popup Engine
========================================== */

let popupCount = 0;

const VIRUS_MESSAGES = [

"Birthday.exe is trying to install itself.",

"Too many memories were found.",

"Cake.dll has stopped responding.",

"Friendship.exe cannot be removed.",

"Windows has detected excessive fun.",

"Installing birthday virus..."

];

function randomMessage(){

    return VIRUS_MESSAGES[
        Math.floor(
            Math.random()*VIRUS_MESSAGES.length
        )
    ];

}

function createVirusPopup(){

    popupCount++;

    const win=createWindow({

        title:"Windows Security Center",

        width:340,

        height:180,

        content:`

<p>

⚠ ${randomMessage()}

</p>

<br>

<div style="text-align:right;">

<button class="virusOK">

OK

</button>

</div>

`

    });

    /* random position */

    win.style.left=

    Math.random()*
    (window.innerWidth-360)

    +"px";

    win.style.top=

    Math.random()*
    (window.innerHeight-250)

    +"px";

    const btn=

    win.querySelector(".virusOK");

    btn.onclick=()=>{

        win.remove();

        if(popupCount<18){

            createVirusPopup();
            createVirusPopup();

        }

    };

}
