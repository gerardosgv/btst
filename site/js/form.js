  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_jekLusDoh8oM-gsWSFywehb-Dh5A4vY",
    authDomain: "contacto-294f6.firebaseapp.com",
    databaseURL: "https://contacto-294f6.firebaseio.com",
    projectId: "contacto-294f6",
    storageBucket: "contacto-294f6.appspot.com",
    messagingSenderId: "459833795902"
  };
  firebase.initializeApp(config);


//Referenciar colección de datos
const colleccionMsg = firebase.database().ref('messages');

//Llamar función en submit
document.getElementById('contactForm').addEventListener('submit', ingresoFormulario);

//Ingresar formulario
function ingresoFormulario(e){
    e.preventDefault();


    //Guardar variables
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth()+1; 
    const ano = hoy.getFullYear();
    const hora = hoy.getHours();
    const minutos = hoy.getMinutes();
    const fecha = `Fecha: ${dia}, ${mes}, ${ano} a las ${hora}:${minutos} `;
    const nombre = getInputVal('nombre');
    const email = getInputVal('email');
    const proyecto = getInputVal('proyecto');
    const asunto = getInputVal('asunto');
    const detalles = getInputVal('detalles');

    console.log(nombre)
    console.log(email)
    console.log(proyecto)
    console.log(asunto)
    console.log(detalles)
    console.log(fecha)

    //Grabar mensaje
    guardarMensaje(fecha, nombre, email, proyecto, asunto, detalles);

    //Mostrar alerta
    document.querySelector('.formulario-enviado').style.display = 'block';

    //Quitar despues de 3 segundos
    setTimeout(function(){
        document.querySelector('.formulario-enviado').style.display = 'none';
    }, 3000);

    //Resetear formulario
    document.getElementById('contactForm').reset();
}

// Funcion que guarda los valores de las variables
function getInputVal(id){
    return document.getElementById(id).value;
}

//Guardar mensaje a firebase
function guardarMensaje(fecha, nombre, email, proyecto, asunto, detalles){
    const newMessageRef = colleccionMsg.push();
    newMessageRef.set({
        fecha: fecha,
        nombre: nombre,
        email: email,
        proyecto: proyecto,
        asunto: asunto,
        detalles: detalles
    });
}