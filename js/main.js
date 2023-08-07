let inputNombre = document.getElementById('input-nombre') //traigo el input
let popup = document.getElementById('popup') // traigo el Popup
let tarea1 = document.getElementById('tarea1').innerHTML //traigo tarea1
let check1 = document.getElementById('check1').innerHTML //traigo check1

let tarea2 = document.getElementById('tarea2').innerHTML  //traigo tarea2
let check2 = document.getElementById('check2').innerHTML //traigo check2

let tarea3 = document.getElementById('tarea3').innerHTML //traigo tarea3
let check3 = document.getElementById('check3').innerHTML //traigo check3

let tarea4 = document.getElementById('tarea4').innerHTML //traigo tarea4
let check4 = document.getElementById('check4').innerHTML //traigo check4

let tarea5 = document.getElementById('tarea5').innerHTML //traigo tarea5
let check5 = document.getElementById('check5').innerHTML //traigo check5

let tarea6 = document.getElementById('tarea6').innerHTML //traigo tarea6
let check6 = document.getElementById('check6').innerHTML //traigo check6

let tarea7 = document.getElementById('tarea7').innerHTML //traigo tarea7
let check7 = document.getElementById('check7').innerHTML //traigo check7

let tarea8 = document.getElementById('tarea8').innerHTML //traigo tarea8
let check8 = document.getElementById('check8').innerHTML //traigo check8

let tarea9 = document.getElementById('tarea9').innerHTML //traigo tarea9
let check9 = document.getElementById('check9').innerHTML //traigo check9

let tarea10 = document.getElementById('tarea10').innerHTML //traigo tarea10
let check10 = document.getElementById('check10').innerHTML //traigo check10

let popupContainer = document.getElementById('popup-container')

check1.addEventListener('click', (e) => {
    if (e.target = "checkbox") {
        let valorInput = inputNombre.value
        alert('Bien ' + valorInput + ' terminaste de ' + tarea1)
    }
})


