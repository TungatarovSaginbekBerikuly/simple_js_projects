document.querySelectorAll('button').forEach(function(element) {
    element.onclick = function() {
        let chipsClass = element.classList;

        if (chipsClass.contains('chips-success')) {
            chips('Some success message...', 'success');
        } 
        else if (chipsClass.contains('chips-warning')) {
            chips('Some warning message...', 'warning');
        } else if (chipsClass.contains('chips-danger')) {
            chips('Some danger message...', 'danger');
        } else {
            chips('Some chips message...');
        }
    }
});

function chips(message, status = 'primary') {
    let chips = document.createElement('div');
    chips.classList.add('chips');
    chips.innerHTML = message;
    document.querySelector('body').appendChild(chips);
    
    switch (status) {
        case 'success':
            chips.style.color = "white";
            chips.style.backgroundColor = 'green';
            break;
        case 'warning':
            chips.style.color = "black";
            chips.style.backgroundColor = 'orange';
            break;
        case 'danger':
            chips.style.color = "white";
            chips.style.backgroundColor = 'red';
            break;
    }
    
    addChips(chips);
    setTimeout(function() {
        deleteChips(chips);
    }, 5000);
}

function deleteChips(chips) {
    chips.remove();
    let allChips = document.querySelectorAll('.chips-field .chips');
    if(allChips.length == 0) {
        document.querySelector('.chips-field').remove();
    }
}

function addChips(chips) {
    let chipsField = document.querySelector('.chips-field');
    if(chipsField) {
        chipsField.appendChild(chips);
    } else {
        let chipsField = document.createElement('div');
        chipsField.classList.add('chips-field');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);
    }
}