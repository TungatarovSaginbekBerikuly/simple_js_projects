document.querySelector('button').onclick = answers;

function answers() {
    let input = document.querySelector('input');
    if(input.value == 'A') {
        input.style.border = '2px solid green';
    } else {
        input.style.border = '2px solid red';
    }
}

showQuestion('1. Где здесь ошибка?', [
    'A: 5 + 5 = 15', 
    'B: 10 + 10 = 20',
    'C: 30 + 10 = 40'
]);

function showQuestion(question, variants) {
    let title = document.createElement('h1');
    document.querySelector('.questions').appendChild(title);
    title.innerHTML = question;
    let b = document.createElement('ul');
    document.querySelector('.questions').appendChild(b);
    for(let i = 0; i < variants.length; i++) {
        let li = document.createElement('li');
        document.querySelector('ul').appendChild(li);
        li.innerHTML = variants[i]; 
    }
}