document.addEventListener("DOMContentLoaded", function () {
    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        // Posición aleatoria en la pantalla
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 

        document.body.appendChild(heart);

        // Elimina el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Genera corazones cada 300ms
    setInterval(createHeart, 300);
});
