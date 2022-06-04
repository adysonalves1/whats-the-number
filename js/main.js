const button = document.querySelector('.button');
let input = document.querySelector('.input');
var numero = Math.floor(Math.random() * 1000);
const container = document.querySelector('.info');
container.style.display = 'none';
const manual = document.querySelector('.manual');
let buttonReset = document.querySelector('.button-reset');
buttonReset.style.display = 'none';
const count = document.querySelector('.count');
const p = document.createElement('p');
const p2 = document.createElement('p');

let tentativas = 0;

count.appendChild(p).innerHTML = "Tentativas:";
count.appendChild(p2).innerHTML = `${tentativas}`


button.addEventListener('click', (e) => {

    const span = document.createElement('span');
    

    if (input.value == numero && input.value != '') {

        manual.style.display = 'none';
        container.style.display = 'block';
        span.classList.add('correct');
        container.insertAdjacentElement('afterbegin',span).innerHTML = `<strong>Você acertou!!!</strong> o número secreto é: ${input.value} <br/>`;
        button.style.display = 'none'
        buttonReset.style.display = 'block';

    } else if (input.value < numero && input.value != '') {
        manual.style.display = 'none';
        container.style.display = 'block';
        span.classList.add('incorrect');
        container.insertAdjacentElement('afterbegin',span).innerHTML = `Dica: o número é maior que ${input.value} <br/>`;
        input.value = '';
        tentativas++;
        count.appendChild(p2).innerHTML = `${tentativas}`

    } else if (input.value > numero && input.value != '') {
        manual.style.display = 'none';
        container.style.display = 'block';
        span.classList.add('incorrect');
        container.insertAdjacentElement('afterbegin',span).innerHTML = `Dica: o número é menor que ${input.value} <br/>`;
        input.value = '';
        tentativas++;
        count.appendChild(p2).innerHTML = `${tentativas}`


    } else{

    }

})
