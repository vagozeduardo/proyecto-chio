//variables del htaml con las id
const nombre_usuario = document.getElementById('nombre_registro')
const Apellido_Paterno = document.getElementById('apellidoPaterno_registroa')
const Apellido_Materno = document.getElementById('apellidoMaterno_registro')
const Correo = document.getElementById("correo_registro")
const CorreoConfirmar = document.getElementById("confirmarCorreo_registro")
const contraseña = document.getElementById("contraseña_registro")
const contraseñaConfirmar = document.getElementById("confirmarContraseña_registro")
const btnGuardar = document.getElementById('guardarRegistro_registro')
const errorMensaje = document.getElementById('errorMensaje_registro');

//funcion con enter guarda datos
/*
document.getElementById('registroForm').addEventListener('submit', (event) => {
    event.preventDefault();

    errorMensaje.innerText = ""

    if (Correo.value.trim() !== CorreoConfirmar.value.trim()) {
        errorMensaje.innerText = "Los correos electrónicos no coinciden.";
        return;
    } 
    if (contraseña.value.trim() !== contraseñaConfirmar.value.trim()) {
        errorMensaje.innerText = "Las contraseñas no coinciden.";
        return;
    }
    alert("Registro exitoso")
    crearUsuario()
});
*/

//evento de click para crear Usuario, guarda los datos solo con el click al boton
btnGuardar.addEventListener('click', (event) => {
    event.preventDefault(); // no se para que es, pero no vacia el formulario
    errorMensaje.innerText = "" //limpia los mensajes

    // Validar que los campos no estén vacíos
    if (!nombre_usuario.value.trim() || !Apellido_Paterno.value.trim() || !Apellido_Materno.value.trim() ||
        !Correo.value.trim() || !CorreoConfirmar.value.trim() || !contraseña.value.trim() || !contraseñaConfirmar.value.trim()) {
        errorMensaje.innerText = "Todos los campos son obligatorios.";
        return;
    }
//verifica si son igules
    if (Correo.value.trim() !== CorreoConfirmar.value.trim()) {
        errorMensaje.innerText = "Los correos electrónicos no coinciden.";
        return;
    }
    //igual que el de arriba pero para la contraseña
    if (contraseña.value.trim() !== contraseñaConfirmar.value.trim()) {
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
        nombreUser: nombre_usuario.value.trim(),
        apellidoPA_User: Apellido_Paterno.value.trim(),
        apellidoMA_User: Apellido_Materno.value.trim(),
        correoUser: Correo.value.trim(),
        contraseñaUser: contraseña.value.trim()
    }
    console.log(UsuarioGuardar);

    await fetch('http://localhost:8080/Usuario/registro', {//la funcion que hara, es la cosulta que se encuetra en el RegistroController
        method: 'POST',//post de insert a la base
        mode: 'cors',//no se
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UsuarioGuardar)
    })
    //creo que son los try catch como en java
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
