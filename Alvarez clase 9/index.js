let globalNombre = document.getElementById("nombre");
let globalCorreo = document.getElementById("email");
let globalClave = document.getElementById("contra");

const check1 = document.querySelector('#errorUser');
const check2 = document.querySelector('#errorClave');
const validado = document.querySelector('#validado');

let boton = document.getElementById("boton");

let validacion;

let i = 3;

const usuarios = [];

function usuario(nombre, clave, correo) {
  this.nombre = nombre;
  this.clave = clave;
  this.correo = correo;
}

usuarios[0] = new usuario("SebaSinDientes", "holaC0der", "sebastian@gmail.com");                      //
usuarios[1] = new usuario("PeladoOmnipotente", "AHJahd8A782hjsdj", "elsucio@gmail.com");             // Simulo base de datos
usuarios[2] = new usuario("PatriarcaMofeta", "LóbuloFrontal007", "elcorreodelamofeta@gmail.com");                 //



boton.addEventListener("click", () => {

  validado.innerHTML = "<p><p>";
  document.getElementById("name").innerHTML = "";

  validacion = usuarios.some(elem => elem.nombre == globalNombre.value || elem.correo == globalCorreo.value);

  if (validacion == true) {
    check1.innerHTML = "<p>Parece que tu nombre de usuario y/o correo ya están registrados.<p>";
   }
  else {check1.innerHTML = "<p><p>";}

  if (globalClave.length < 8 || globalClave.value.toLowerCase() == globalClave.value || globalClave.value.toUpperCase() == globalClave.value) {
    check2.innerHTML = "<p>Tu contraseña debe tener al menos 8 caracteres y combinar mayúsculas y minúsculas.<p>";
    validacion = true;
    }
  else {check2.innerHTML = "<p><p>";}

  if (validacion == false) {
    usuarios[i] = new usuario(globalNombre.value, globalClave.value, globalCorreo.value);
    validado.innerHTML = "<p>Felicidades, tu cuenta se ha creado satisfactoriamente. Te hemos enviado un correo a:<p>";
    document.getElementById("name").innerHTML = globalCorreo.value;
    i++;
  }


})


