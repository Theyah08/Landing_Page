
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

window.onload = function() {
    var petImages = [
        "image/cats.png",
        "image/Dogs.png",
        "image/bird.png",
        "image/fish.png",
        "image/Rep.png"
    ];

    var currentIndex = 0;
    var petImgElement = document.getElementById("pet-feature-img");

    setInterval(function() {
        // fade out
        petImgElement.style.opacity = 0;

        setTimeout(function() {
            // change image after fade out
            currentIndex = (currentIndex + 1) % petImages.length;
            petImgElement.src = petImages[currentIndex];
            // fade in
            petImgElement.style.opacity = 1;
        }, 500); 
    }, 5000); 
};

