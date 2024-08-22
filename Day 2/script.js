function mostrarMensaje() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const lenguaje = document.getElementById("lenguaje").value;

    const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    document.getElementById("mensaje").innerText = mensaje;

    document.getElementById("pregunta").innerText = `¿Te gusta estudiar ${lenguaje}?`;
    document.getElementById("preguntaGusto").style.display = "block";
}

function responderGusto(respuesta) {
    if (respuesta === 1) {
        document.getElementById("respuesta").innerText = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
    } else if (respuesta === 2) {
        document.getElementById("respuesta").innerText = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
    }
}