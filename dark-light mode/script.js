let btnChangeMode = document.querySelector('button');
let style = document.querySelectorAll('link')[1]; // Или можно дать class для link

btnChangeMode.onclick = function () {
    if (style.getAttribute('href') == 'css/light.css') {
        style.href = 'css/dark.css';
        btnChangeMode.innerText = "Light mode";
    } else {
        style.href = 'css/light.css';
        btnChangeMode.innerText = "Dark mode";
    }   
}