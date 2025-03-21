

let inp_1 = document.querySelector('.inp_1')
let text_1 = document.querySelector('.text_1')
let btn = document.querySelector('.btn')
btn.onclick = () => {
    text_1.innerHTML = 'Привет,' + ' ' + inp_1.value + '!'
}


let inp_2 = document.querySelector('.inp_2')
const year = 2025
let text_2 = document.querySelector('.text_2')
let btn_2 = document.querySelector('.btn_2')
btn_2.onclick = () => {
    text_2.innerHTML = 'Вам' + ' ' + (year - +inp_2.value) + ' ' + 'лет.'
}



let inp_3 = document.querySelector('.inp_3')
let text_3 = document.querySelector('.text_3')
let btn_3 = document.querySelector('.btn_3')
btn_3.onclick = () => {
    text_3.innerHTML = 'Переметр квадрата:' + ' ' + (4 * +inp_3.value) + ' ' + 'см^2'
}

let inp_4 = document.querySelector('.inp_4')
const pi = 3.14
let text_4 = document.querySelector('.text_4')
let btn_4 = document.querySelector('.btn_4')
btn_4.onclick = () => {
    text_4.innerHTML = 'Площадь круга:' + ' ' + (pi * (+inp_4.value * +inp_4.value)) + ' ' + 'см'
}


let inp_5 = document.querySelector('.inp_5')
let inp_6 = document.querySelector('.inp_6')
let text_5 = document.querySelector('.text_5')
let btn_5 = document.querySelector('.btn_5')
btn_5.onclick = () => {
    text_5.innerHTML = 'Скорость:' + ' ' + (+inp_5.value / +inp_6.value) + ' ' + 'км/ч'
}

let inp_7 = document.querySelector('.inp_7')
const kurs = 0.92
let text_7 = document.querySelector('.text_7')
let btn_7 = document.querySelector('.btn_7')
btn_7.onclick = () => {
    text_7.innerHTML = 'Сумма в евро:' + ' ' + (+inp_7.value * kurs) + ' ' + 'евро.'
}