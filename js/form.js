document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre');
    let correo = document.getElementById('correo');
    let motivo = document.getElementById('motivo');
    let suscripcionSi = document.getElementById('si');
    let suscripcionNo = document.getElementById('no');
    let mensaje = "Por favor, complete este campo.";

    if (nombre.value.trim() === '') {
        nombre.classList.add('campo-incompleto');
        mostrarMensaje(nombre, mensaje);
        return;
    } else {
        nombre.classList.remove('campo-incompleto');
        ocultarMensaje(nombre);
    }

    if (correo.value.trim() === '') {
        correo.classList.add('campo-incompleto');
        mostrarMensaje(correo, mensaje);
        return;
    } else {
        correo.classList.remove('campo-incompleto');
        ocultarMensaje(correo);
    }

    if (motivo.value === '') {
        mostrarMensaje(motivo, 'Seleccione una opción');
        motivo.classList.add('campo-incompleto');
        return;
    } else {
        motivo.classList.remove('campo-incompleto');
        ocultarMensaje(motivo);
    }

    if (!suscripcionSi.checked && !suscripcionNo.checked) {
        mostrarMensaje(document.getElementById('desea-suscribirse'), 'Seleccione una opción');
        return;
    } else {
        ocultarMensaje(document.getElementById('si'));
    }

    this.submit();
    alert("Muchas gracias por enviar el formulario");
});

function mostrarMensaje(elemento, mensaje) {
    let mensajeElemento = elemento.nextElementSibling;
    if (!mensajeElemento || mensajeElemento.className !== 'mensaje-campo') {
        mensajeElemento = document.createElement('span');
        mensajeElemento.className = 'mensaje-campo';
        elemento.parentNode.insertBefore(mensajeElemento, elemento.nextSibling);
    }
    mensajeElemento.textContent = mensaje;
}

function ocultarMensaje(elemento) {
    let mensajeElemento = elemento.nextElementSibling;
    if (mensajeElemento && mensajeElemento.className === 'mensaje-campo') {
        mensajeElemento.parentNode.removeChild(mensajeElemento);
    }
}
