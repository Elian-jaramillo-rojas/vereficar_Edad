const edad = document.getElementById("Edad")
const nombre = document.getElementById("Nombre")
const mensaje = document.getElementById("mensaje")
const boton = document.getElementById("boton")

boton.addEventListener('click',verificarEdad)

function verificarEdad(){ 
    if(edad.value >=18){
        
        mensaje.textContent=  "Hola    "  + nombre.value + "     usted es mayor de edad, puede votar" 
    }
    else if (edad.value < 18  && edad.value >0 ){
        mensaje.textContent= "Hola   " + nombre.value +  "      usted es menor de edad, un no puede votar"
    }
    else {
        mensaje.textContent= "Hola   " + nombre.value  +       "     usted ingreso un valor erroneo"
    }
    
}