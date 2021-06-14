var navLinks = document.getElementById("navLinks");

function hideMenu() {
    navLinks.style.right = "-200px";
    window.setTimeout(function() {
        navLinks.style.display = "none";
    }, 600);
}

function showMenu() {
    navLinks.style.display = "block";
    window.setTimeout(function() {
        navLinks.style.right = "0";
    }, 5);
}