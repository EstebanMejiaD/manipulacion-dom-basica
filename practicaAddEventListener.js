// con document.querySelector(``): se tiene que utilizar
// la misma sintaxis que se usa en css para llamar clases, id, etc.
const h1 = document.querySelector(`h1`);
const input1 = document.querySelector(`#calculo1`);
const input2 = document.querySelector(`#calculo2`);
const btn = document.querySelector(`#btn-calcular`);
const btnSuma = document.querySelector(`#suma`);
const btnResta = document.querySelector(`#resta`);
const btnMult = document.querySelector(`#mult`);
const btnDivi = document.querySelector(`#divi`);
const pResultado = document.querySelector(`#resultado`);
const form =document.querySelector(`#formulario`);

// EL addEventListeber es un escuchador de eventos
// escucha cada vez que suceda cierto evento
btnSuma.addEventListener(`click`, clickSuma);
btnResta.addEventListener(`click`, clickResta);
btnMult.addEventListener(`click`, clickMult);
btnDivi.addEventListener(`click`, clickDivi);


//cuadno utilicemos un formulario y se envie todo form en un solo boton y
// este estará por defecto en submit y se necesita utilizar el metodo de 
// preventDefault();
// function clickSuma(event){
//     event.preventDefault();
//     const sumaInputs = parseInt(input1.value ) + parseInt(input2.value);
//     pResultado.innerText = `Resultado de la suma: ` + sumaInputs;
// }

function clickSuma(){
    const sumaInputs = parseInt(input1.value ) + parseInt(input2.value);
    pResultado.innerText = `Resultado de la suma: ` + sumaInputs;
}
function clickResta() {
    const restaInputs = parseInt(input1.value) - parseInt(input2.value);
    pResultado.innerText = `Resultado de la resta: ` + restaInputs;
}

function clickMult() {
    const multInputs = parseInt(input1.value) * parseInt(input2.value);
    pResultado.innerText = `Resultado de la Multiplicacion: ` + multInputs;
}

function clickDivi() {
    
    const diviInputs = parseInt(input1.value) / parseInt(input2.value);
    pResultado.innerText = `Resultado de la Divicion: ` + diviInputs;
}