let inputNombre = document.getElementById('input-nombre')
let popup = document.getElementById('popup')
let tareaPendiente = document.getElementById('tarea1')
let popupContainer = document.getElementById('popup-container')

tarea1.addEventListener('click', () => {
    let valorInput = inputNombre.value
    popup.innerHTML = 'Bien '  + inputNombre + ' terminaste de ' + tareaPendiente 
    // tareaPendiente.classList = "tachar"
    // divPopup.style.display = "block";
    // parrafoPopup.innerHTML = "Bien " + valorInput + " terminaste de " + tarea1
})


// tarea1.addEventListener('click', function (e) {
//     if (e.target.localName = 'p') {
//         divPopup.style.display = 'flex';
//         tarea1.style.text-decoration = 'line-trough';
//     }
// })


