const btn_red = document.querySelectorAll(".btn-red");

const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");


const sign = document.getElementById("sign");

btn_red.forEach(button => {
    button.addEventListener('click', () => {
        alert("You will be directed to home page");
    });
});


langBtn.addEventListener("click", () => {
    langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});

// Optional: hide menu when clicking outside
document.addEventListener("click", (event) => {
    if (!langBtn.contains(event.target) && !langMenu.contains(event.target)) {
        langMenu.style.display = "none";
    }
});

sign.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "./login.html";
});