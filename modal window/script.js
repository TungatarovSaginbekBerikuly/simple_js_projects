document.querySelectorAll('.modal-show').forEach(function(element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-wrap').forEach(function(element) {
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-close').forEach(function(element) {
    element.onclick = closeModal;
});

function showModal() {
    let data = this.dataset.modal;
    document.querySelector(data).classList.remove('hide');
    document.onkeydown = function(event) {
        if(event.keyCode == 27) {
            closeModal();
        }
        return false;
    }
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function(element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}