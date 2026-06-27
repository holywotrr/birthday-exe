const boot = document.getElementById("boot");
const login = document.getElementById("login");

setTimeout(() => {
    boot.style.display = "none";
    login.hidden = false;
    login.style.display = "flex";
}, 4000);

document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();

    if (!username) {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("guestName", username);

    alert(`Welcome ${username}!`);
});const boot = document.getElementById("boot");
const login = document.getElementById("login");

setTimeout(() => {
    boot.style.display = "none";
    login.hidden = false;
    login.style.display = "flex";
}, 4000);

document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();

    if (!username) {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("guestName", username);

    alert(`Welcome ${username}!`);
});const boot = document.getElementById("boot");
const login = document.getElementById("login");

setTimeout(() => {
    boot.style.display = "none";
    login.hidden = false;
    login.style.display = "flex";
}, 4000);

document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();

    if (!username) {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("guestName", username);

    alert(`Welcome ${username}!`);
});
