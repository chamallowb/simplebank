function openMenu() {
    document.getElementById("myMenu").style.width = "250px";
    document.getElementById("menuIcon").style.display = "none"; // Masquer l'icône du menu
}
function closeMenu() {
    document.getElementById("myMenu").style.width = "0";

    // Afficher l'icône du menu après 0.3s
    setTimeout(function() {
        document.getElementById("menuIcon").style.display = "block";
    }, 350); // 300 ms = 0.3 secondes
}