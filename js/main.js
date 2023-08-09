let inputNombre = document.getElementById('nombre') //traigo el input
let ingresar = document.getElementById('ingresar') //traigo boton ingresar
let popupContenedor = document.getElementById('popup-container') // traigo el PopupContainer
let listado = document.getElementById('listado') //traigo div listado
let bienvenida = document.getElementById('bienvenida') //traigo div bienvenida
let cerrarModal = document.getElementById('cerrarModal') // btn cerrar modal
let item = document.querySelectorAll('.item') //traigo todos los div con clase item
let check = document.getElementById('check').innerHTML //traigo check
let tarea1 = document.getElementById('tarea1').innerHTML //traigo tarea

let nombreIngresado = inputNombre.value
//Ingresa nombre y al dar click en boton ingresar desaparece pantalla inicial y aparece el listado
ingresar.addEventListener('click', () => {
    listado.style.display = 'block'
    bienvenida.style.display = 'none'
})

item.forEach(task =>{
    task.addEventListener("click", ()=>{
        const label = task.querySelector('label')
        const tituloTarea = label.innerHTML
        
        alertUser(nombre, tituloTarea)
    })
})

function alertUser(nombre, tituloTarea){
    alert(`Bien ${nombre.value}! terminaste de ${tituloTarea} !!`)
}

//Al hacer click en boton cerrar modal se cierra
document.addEventListener('click', (e) => {
    if (e.target.id == 'cerrarModal') {
        popupContenedor.style.display = 'none'
    }
})




//Al hacer click en el checkbox tacha la tarea pendiente
// document.addEventListener('click', (e) => {
//     if (e.target.id == 'check') {
//         // popupContenedor.style.display = 'block'
//         // alert(`${nombreIngresado} terminaste: ${tarea1}`)

//         // let saludo = "Bien " + nombreIngresado + "!! Terminaste de " + tarea
//         // var nuevoP = document.createElement('p')
//         // var txt = document.createTextNode(saludo)
//         // nuevoP.appendChild(txt)
//         // tarea.appendChild(p)
//     }
// })