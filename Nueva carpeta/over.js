function ampliarImagen() {
    const icono = document.getElementById ('miicono');
    const overlay = document.getElementById('overlay');

    icono.classList.add('ampliado'); // Agranda la imagen
    overlay.style.display = 'block'; // Muestra el fondo oscuro
}

function cerrarImagen() {
    const icono = document.getElementById('miicono');
    const overlay = document.getElementById('overlay');

    icono.classList.remove('ampliado'); // Vuelve a su tamaño original
    overlay.style.display = 'none';    // Oculta el fondo oscuro
}