// valor inicial del encabezado
const valEncabezado1 = document.getElementById("encabezado1").innerText ;
// selecciono el primer input
const primerInput = document.querySelector("input");
// selecciono el primer button
const primerButton = document.querySelector("button");


// selecciono el primer encabezado 
const  primerEncabezado = document.getElementById("encabezado1");
//evento para que al hacer click llame a una funcion que remplace el texto del "encabezado1" por el valor que tenga el primerInput
primerButton.addEventListener("click", function() {
        // selecciono el encabezado a cambiar el titulo
        primerEncabezado.innerText = primerInput.value;
    }
);

// selecciono el input de añadir contendio
const inputContenido = document.getElementById("frase");
// selecciono el boton de añadir
const botonAñadir = document.getElementById("botonFrase");

//selecciono la section a la que le añadiré el contenido
const sectionContenido = document.querySelector("section");

botonAñadir.addEventListener("click", function(){
        //creo un parrafo
        let parrafoNuevo = document.createElement("p");
        //le añado una clase para resetearlo
        parrafoNuevo.classList.add("nuevo");
        // añado el parrafo a la section
        sectionContenido.appendChild(parrafoNuevo);

        // el contenido de inputContenido (lo que yo he escrito) será el contenido del parrafo
        parrafoNuevo.innerText = inputContenido.value;
    }
);

//selecciono todos los inputs 
const inputs = document.querySelectorAll("input");
// de esos inputs, escojo el de la ultima posicion
const ultimoInput = inputs[document.querySelectorAll("input").length - 1];

// al hacer click en ese input, el valor es el inicial 
ultimoInput.addEventListener("click", function(){
        // selecciono los parrafos con la clase "añadido-js"
        let parrafosAñadidos = document.querySelectorAll(".nuevo");
        //elimino los parrafos añadidos con un bucle para que vaya 1 por 1 de toda la lista obtenida en parrafosAñadidos
        for (let parrafo of parrafosAñadidos) {
            parrafo.style.display = "none";
        }          
        // restauro el valor inicial del encabezado
        primerEncabezado.innerText = valEncabezado1 ;
    }
);

// selecciono el checkbox para mostrar el encabezado
const primerChkbx = document.querySelector("ul > li:nth-child(5) > input") ;
// al cambiar el estado del checkbox:
primerChkbx.addEventListener("change", function(){
        if (primerChkbx.checked) {
            // si está checked, se muestra
            primerEncabezado.style.display = "block"
        } else{ // si no, no se muestra
            primerEncabezado.style.display = "none";
        }
    }
);


//selecciono el segundo checkbox
let segundoChkbx = document.querySelector("ul > li:nth-child(6) > input");

segundoChkbx.addEventListener("change", function(){
    // selecciono los parrafos añadidos
    let parrafosAñadidos = document.querySelectorAll(".nuevo");
    if (segundoChkbx.checked) {
        for (let parrafo of parrafosAñadidos){
            parrafo.style.display = "block";
        }
    } else{
        for (let parrafo of parrafosAñadidos) {
            parrafo.style.display = "none";
        }
    }
});



// seleccionar los input de contraseña
const contraseña1 = document.getElementById("pass1");
const contraseña2 = document.getElementById("pass2");
// seleccionasr el input de enviar
const btnEnviar = inputs[inputs.length - 2];
// selecciono el input del dni
const inputDni = document.getElementById("dni");

btnEnviar.addEventListener("click", function(){
    contraseña1.classList.add("passwrd");
    contraseña2.classList.add("passwrd");
    if((contraseña1.value === "") && (contraseña2.value === "")){
        contraseña1.style.border = "5px solid red";
        contraseña2.style.border = "5px solid red";
        alert("no pueden estar vacias");
    } else if (contraseña1.value === contraseña2.value){
        contraseña1.style.border = "5px solid green";
        contraseña2.style.border = "5px solid green";
        alert("coinciden");
    } else {
        contraseña1.style.border = "5px solid red";
        contraseña2.style.border = "5px solid red";
        alert("no coinciden");
    }
    if(inputDni.value === ""){
        inputDni.classList.add("incorrecto");
        alert("Introduce DNI");
    } else if((inputDni.value).length - 1 < 9 || (inputDni.value).length > 10){
        inputDni.classList.add("incorrecto");
        alert("error formato DNI");
    } else{
        inputDni.classList.add("correcto");
    }
});

btnEnviar.addEventListener("click",function(){

})
