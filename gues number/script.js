let randomNumber = Math.round(Math.random() * 10);

document.querySelector('button').onclick = () => {
    let input = document.querySelector('input');
    let status = document.querySelector('p');

    if (randomNumber == input.value) {
        alert('Статус: Молодец! Ты угадал.');
        location.reload();
    } else {
        status.innerHTML = 'Статус: Попробуй еще раз.'
    }
}

console.log(randomNumber);