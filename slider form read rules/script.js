let sliderForm = document.querySelector('.form-slider');

document.querySelector('.read-rules').onclick = function() {
    sliderForm.style.marginLeft = "-300px";
}

document.querySelectorAll('.read-rules-back').forEach(function(element) {
    element.onclick = function () {
        sliderForm.style.marginLeft = "0";
    }
});