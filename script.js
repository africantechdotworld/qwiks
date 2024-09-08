const nav = document.getElementById("mobile-nav");

function toggleMenu(action) {
    if (action == "show") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

document.addEventListener('click', () => {
    if (nav.style.display == "block") {
        nav.style.display = "none";
    }
});
    