// 
const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const edadInput = document.querySelector('#edad');
const actividadInput = document.querySelector('#actividad');

const formulario = document.querySelector('#nuevo-calculo');
const resultado = document.querySelector('#resultadoCalorias');

const objBusqueda = {
    peso: '',
    altura: '',
    edad: '',
    actividad: ''
};

document.addEventListener('DOMContentLoaded', () => {

    pesoInput.addEventListener('change', leerValorr);
    alturaInput.addEventListener('change', leerValorr);
    edadInput.addEventListener('change', leerValorr);
    actividadInput.addEventListener('change', leerValorr);

    formulario.addEventListener('submit', submitFormulario)

    
});


function leerValorr(e){
    objBusqueda[e.target.name] = e.target.value;
    console.log(objBusqueda);
}

function submitFormulario(e) {
    e.preventDefault();

    // Extraer los valores
    const {peso, altura, edad, actividad} = objBusqueda;

    if(peso === '' || altura === '' || edad === '' || actividad === '') {
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

    mostrarCotizacionHTML(objBusqueda);


}


function mostrarAlerta(mensaje) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
       formulario.appendChild(divMensaje);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
}


function mostrarCotizacionHTML(consulta) {

    limpiarHTML();

    
    const {peso, altura, edad, actividad} = consulta;

    
    calculoPeso = 66 +(13.7*parseInt(peso));
    calculoAltura = 5*parseInt(altura);
    calculoEdad= 6,8*parseInt(edad);
    calculoActividad =parseFloat(actividad);
    
    calculo = (calculoPeso + (calculoAltura - calculoEdad))*calculoActividad

    const caja = document.createElement('p');
    caja.classList.add('precio');
    caja.innerHTML = `Las calorias necesarias son: <span> ${calculo} </span>`;


    resultado.appendChild(caja);

}


function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
  }
