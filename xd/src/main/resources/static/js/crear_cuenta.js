//variables
const nombre_usuario = document.getElementById('nombre_registro')
const Apellido_Paterno = document.getElementById('apellidoPaterno_registroa')
const Apellido_Materno = document.getElementById('apellidoMaterno_registro')
const Correo = document.getElementById("correo_registro")
const CorreoConfirmar = document.getElementById("confirmarCorreo_registro")
const contraseña = document.getElementById("contraseña_registro")
const contraseñaConfirmar = document.getElementById("confirmarContraseña_registro")
const btnGuardar = document.getElementById('guardarRegistro_registro')
const errorMensaje = document.getElementById('errorMensaje_registro');
document.getElementById('registroForm').addEventListener('submit', (event) => {
    event.preventDefault
})



//vento de click para crear Usuario
btnGuardar.addEventListener('click', () => {
    if (Correo !== CorreoConfirmar) {
        errorMensaje.innerText = "Los correos electrónicos no coinciden.";
        return;
    } if (contraseña !== contraseñaConfirmar) {
        errorMensaje.innerText = "Las contraseñas no coinciden.";
        return;
    }
    alert("Registro exitoso")
    crearUsuario()

});

//Crear Usuario
async function crearUsuario() {
    let UsuarioGuardar = {
        idregistro: 0,
        nombreUser: nombre_usuario.value,
        apellidoPA_User: Apellido_Paterno.value,
        apellidoMA_User: Apellido_Materno.value,
        correoUser: Correo.value,
        contraseñaUser: contraseña.value
    }
    console.log(UsuarioGuardar);

    await fetch('http://localhost:8080/Usuario/registro', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UsuarioGuardar)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("Registro guardado");

        })
        .catch((err) => {
            console.log(err);
            alert("Lo siento no pudimos crear el usuario")
        })
}
